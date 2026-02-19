import type { User,UserSignupData } from "./user.types.js";
import { db } from "../../config/firebaseconfig.js";
import crypto from "crypto"

const UserCollection = db.collection("UserProfile")

const userIdGenerator = ()=>{
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    const bytes = crypto.randomBytes(10);
    for (let i = 0; i < 10; i++) {
        id += chars[(bytes[i] ?? 0) % chars.length];
    }
    return id;
}
export const UserSignup = async (userData : UserSignupData)=>{

    const userId = userIdGenerator()

    try {
        const finalUserData:User = {
            FullName:userData.FullName,
            Username:userData.Username,
            UserID:userId,
            Description:userData.Description,
            email:userData.email,
            phone:userData.phone,
            Skill_list:userData.Skill_list,
            Social_profile:userData.Social_profile,
            Languages:userData.Languages,
            YOE:userData.YOE,
            Education:userData.Education,
            Occupation:userData.Occupation,
            Location:userData.Location,
            InterLeet_Coins:0,
            Confidence_Coins:0,
            Badges:["First Flight"],
            Followers:0,
            Following:0,
            Premium_Membership:false,
            Resume:"",
            User_Analytics:"",
        }
        await UserCollection.add(finalUserData)
    } catch (error:any) {
        throw new Error("Error Occured!",error);
    }
}


export const UserLogin = async (email:string)=>{
    try {
        const userdata = await UserCollection.where("email","==",email).get();
        if(userdata.empty){
            throw new Error("User not found!");
        }
        return userdata.docs[0]?.data();
    } catch (error:any) {
        throw new Error("User not found!");
    } 
}