import { firestore } from "@/config/firebase";
import { ResponseType, UserDataType } from "@/types";
import { doc, updateDoc } from "firebase/firestore";
import { uploadFileToCloudinary } from "./imageService";

export const updateUser = async (
  uid: string,
  userDetails: UserDataType
): Promise<ResponseType> => {
  try {
    if (userDetails.image && userDetails?.image.uri) {
      const res = await uploadFileToCloudinary(userDetails.image, "users");
      if (res.success) {
        userDetails.image = res.data;
      } else {
        return { success: false, msg: res.msg || "Something went wrong" };
      }
    }
    const userRef = doc(firestore, "users", uid);
    await updateDoc(userRef, userDetails);

    // fetch the user & update state
    return { success: true, msg: "User details updated" };
  } catch (error: any) {
    console.log("error", error);
    return { success: false, msg: error?.message };
  }
};
