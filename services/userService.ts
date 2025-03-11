import { firestore } from "@/config/firebase";
import { ResponseType, UserDataType } from "@/types";
import { doc, updateDoc } from "firebase/firestore";

export const updateUser = async (
  uid: string,
  userDetails: UserDataType
): Promise<ResponseType> => {
  try {
    // TODO: image upload pending
    const userRef = doc(firestore, "users", uid);
    await updateDoc(userRef, userDetails);

    // fetch the user & update state
    return { success: true, msg: "User details updated" };
  } catch (error: any) {
    console.log("error", error);
    return { success: false, msg: error?.message };
  }
};
