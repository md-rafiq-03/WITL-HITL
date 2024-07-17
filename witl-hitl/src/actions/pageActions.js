"use server"

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { User } from "@/models/User";
import { Page } from "@/models/page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export default async function savePageSettings(formData){
    mongoose.connect(process.env.MONGO_URI);
    const session=await getServerSession(authOptions);
    
    if(session){
        
        const dataKeys=[
                        'displayName','location','bio','bgType',
                        'bgColor','bgImage','bgColor','bgImage'
                       ];
                       
        const dataToUpdate={};
        for(const key of dataKeys){
            dataToUpdate[key]=formData.get(key);
        }

        if(formData.has('avatar')){
            const avatarLink=formData.get('avatar');
            await User.updateOne(
                {email:session?.user?.email},
                {image:avatarLink},
            );
        }

        await Page.updateOne({owner:session?.user?.email},dataToUpdate,);

        return true;
    }
    return false;
}

export async function savePageButtons(formData){
    mongoose.connect(process.env.MONGO_URI);
    const session=await getServerSession(authOptions);
    if(session){
        const buttonValues={};
        formData.forEach((value,key)=>{
            buttonValues[key]=value;
        });

        const dataToUpdate={buttons:buttonValues};
        await Page.updateOne(
            {owner:session?.user?.email},
            dataToUpdate,
        );
        return true;
    }
    return false;
}

export async function savePageLinks(links){
    mongoose.connect(process.env.MONGO_URI);
    const session=await getServerSession(authOptions);
    if(session){
        await Page.updateOne(
            {owner:session?.user?.email},
            {links}
        );
    }
    return false;
}