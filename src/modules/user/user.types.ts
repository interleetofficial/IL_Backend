export interface UserSignupData{
    FullName:String,
    Username:String,
    Description:String,
    email:String,
    phone:String,
    Skill_list:String[],
    Social_profile:{
        Linkedin:String,
        Leetcode :String,
        X:String,
        Discord:String,
        Github:String,
    },
    Languages:String[],
    YOE:Number,
    Education:String,
    Occupation:String,
    Location:String
}
export interface User{
    FullName:String,
    Username:String,
    UserID:String,
    Description:String,
    email:String,
    phone:String,
    Skill_list:String[],
    User_Analytics:String,
    Social_profile:{
        Linkedin:String,
        Leetcode :String,
        X:String,
        Discord:String,
        Github:String,
    },
    InterLeet_Coins:Number,
    Confidence_Coins:Number,
    Badges:String[],
    Followers:Number,
    Following:Number,
    Premium_Membership:boolean,
    Resume:String,
    Languages:String[],
    YOE:Number,
    Education:String,
    Occupation:String,
    Location:String
}



export interface resultRecord{
    interviewID:String,
    interviewTopic:String,
    resultID:String
}

export interface interviewHistory{
    username:String,
    userID:String,
    history:resultRecord[],
}


export interface company{
    
}