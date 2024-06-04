import { getServerSession } from "next-auth"
import { authOptions } from "../../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation";
import UsernameForm from "@/components/forms/UsernameForm";
import { Page } from "@/models/page";
import mongoose from "mongoose";
import PageSettingsForm from "@/components/forms/PageSettingsForm";

export default async  function Account({searchParams}){
    mongoose.connect(process.env.MONGO_URI);
    const session=await getServerSession(authOptions);
    const desiredusername=searchParams.username;
    
    if(!session){
        redirect('/');
    }

    const page=await Page.findOne({owner:session?.user?.email});
    if(page){
        return (
            <PageSettingsForm page={page} user={session?.user}/>
        );
    }
    return (
        <div>
            <UsernameForm  desiredusername={desiredusername} />
        </div>
    )
}