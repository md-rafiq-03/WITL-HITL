"use client"
import RadioTogglers from "../formItems/RadioTogglers";
import { faPalette, faImage } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import SubmitButton from "../buttons/SubmitButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import savePageSettings from "@/actions/pageActions";
import toast from "react-hot-toast";
import { useState } from "react";


export default  function PageSettingsForm({page,user}){
    const [bgType,setBgType]=useState(page.bgType);
    const [bgColor,setBgColor]=useState(page.bgColor);
    
    async function saveBaseSettings(formData){
        const result= await savePageSettings(formData);
       if(result){
            toast.success("Saved!");
       }
    }

    function handleFileChange(ev){
        const file=ev.target.files?.[0];
        console.log("file:" ,file);
        if(file){
            const formData=new FormData;
            formData.append('file',file);
            console.log("insed if")
            console.log(formData.get('file'));
            fetch('/api/upload',{
                method:'POST',
                body:formData,
            }).then(response=>{
                response.json().then(link=>{
                    console.log(link);
                });
            });
        }
    }

    return (
        <div className="-m-4">
            <form action={saveBaseSettings} >
                
                <div className=" py-16 flex flex-col justify-center items-center "
                style={{backgroundColor:bgColor}}
                >
                        <RadioTogglers  
                            defaultValue={page?.bgType}
                            options={[
                                {value:'color', icon: faPalette , label:'Color'},
                                {value:'image', icon: faImage , label:'Image'}
                            ]}
                            onChange={val=>setBgType(val)}
                        />
                        {bgType=='color' && (
                            <div className="bg-gray-200 shadow text-gray-700 p-2 mt-2">
                                <div className="flex gap-2 justify-center">
                                <span>Background color:</span>
                                <input 
                                    type="color" 
                                    name="bgColor"
                                    defaultValue={page.bgColor}
                                    onChange={ev=>setBgColor(ev.target.value)}/>
                            </div> 
                            </div>
                               
                        )}
                        {bgType=='image' && (
                            <div className="flex  mt-2" >
                                <label className="bg-white shadow px-4 py-2">
                                    <input 
                                        type="file"  
                                        onChange={handleFileChange}
                                        className="hidden"/>
                                    Change Image
                                </label>
                            </div>
                        )}
                        
                </div>
                
                <div className="flex justify-center -mb-12" >
                    <Image
                        src={user?.image}
                        alt={'avatar'}
                        width={128} height={128}
                        className="rounded-full relative -top-8 border-4 border-white shadow shadow-black/50"
                    />
                </div>
                <div className="p-4">

                    <label className="input-label " htmlFor="nameIn">Display Name</label>
                    <input  
                        type="text" 
                        id="nameIn" 
                        name="displayName"
                        defaultValue={page.displayName}
                        placeholder="John Doe" />

                    <label className="input-label" htmlFor="locationIn">Location</label>
                    <input 
                        type="text" 
                        id="locationIn" 
                        name="location"
                        defaultValue={page.location}
                        placeholder="Somewhere in the world" />

                    <label className="input-label" htmlFor="bioIn">Bio</label>
                    <textarea 
                        name="bio" 
                        defaultValue={page?.bio}
                        id="bioIn" 
                        placeholder="Your bio goes here..." />

                    <div className="max-w-[200px] mx-auto">
                        <SubmitButton>
                            <FontAwesomeIcon icon={faSave} />
                            <span>save</span>
                        </SubmitButton>
                    </div>      
                   
                </div>
            </form>
        </div>
        
    );
}