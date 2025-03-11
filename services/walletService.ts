import { ResponseType, WalletType } from "@/types";
import { uploadFileToCloudinary } from "./imageService";
import { collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "@/config/firebase";

export const createOrUpdateWallet = async (
  walletData: Partial<WalletType>
): Promise<ResponseType> => {
  try {
    let walletToSave = { ...walletData };

    if (walletData.image) {
      const res = await uploadFileToCloudinary(walletData.image, "wallets");
      if (res.success) {
        walletData.image = res.data;
      } else {
        return { success: false, msg: res.msg || "Something went wrong" };
      }
    }

    if (!walletData?.id) {
      walletToSave.amount = 0;
      walletData.totalExpenses = 0;
      walletData.totalIncome = 0;
      walletData.created = new Date();
    }

    const walletRef = walletData.id
      ? doc(firestore, "wallets", walletData?.id || "")
      : doc(collection(firestore, "wallets"));
    await setDoc(walletRef, walletToSave);

    return { success: true, data: { ...walletToSave, id: walletRef.id } };
  } catch (error: any) {
    console.log("error", error);
    return { success: false, msg: error?.message };
  }
};
