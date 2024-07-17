import { Page } from "@/models/page";
import { User } from "@/models/User";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mongoose from "mongoose";
import Image from "next/image";
import Link from "next/link";

export default async function Userpage({params}){
    const uri=params.uri;
    mongoose.connect(process.env.MONGO_URI);
    const page=await Page.findOne({uri});
    const user=await User.findOne({email:page.owner});
    return (
        <div className="bg-blue-950 text-white">
            <div
                className="h-36 bg-gray-400 bg-cover bg-center "
                style={
                    page.bgType==='color'
                    ?{backgroundColor:page.bgColor}
                    :{backgroundImage:`url(${page.bgImage})`}
                }
            >
            </div>
            <div className="aspect-square w-36 h-36  mx-auto relative -top-16 -mb-12" >
                <Image 
                    className="rounded-full w-full h-full object-cover"
                    src={user.image}  
                    alt="avatar" 
                    height={256} width={256} />
            </div>
            <h2 className="text-xl text-center mb-1">{page.displayName}</h2>
            <h3 className="text-md flex gap-2  justify-center items-center text-white/70">
                <FontAwesomeIcon className="h-4"  icon={faLocationDot} />
                <span>
                    {page.location}
                </span>
            </h3>
            <div className="max-w-xs mx-auto text-center my-2">
                {page.bio}
            </div>

            <div className="flex gap-2 justify-center">
                {
                    Object.keys(page.buttons).map(buttonKey=>(
                        <Link href={'/'}>
                            {buttonKey}:
                            {page.buttons[buttonKey]}
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}