"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionBox from "../layout/SectionBox";
import { faEnvelope, faSave } from "@fortawesome/free-regular-svg-icons";
import { faGripLines, faMobile, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faFacebook, faGithub, faInstagram, faTelegram, faTiktok, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import SubmitButton from "../buttons/SubmitButton";
import  { savePageButtons } from "@/actions/pageActions";
import toast from "react-hot-toast";
import { ReactSortable } from "react-sortablejs";

export default function PageButttonsForm({page,user}){
    const allButtons=[
        {key:'email', label:'e-mail', icon:faEnvelope ,placeholder:'test@example.com'},
        {key:'mobile', label:'mobile', icon:faMobile,placeholder:'+91 99999999999'},
        {key:'instagram', label:'instagram', icon:faInstagram,placeholder:'https://instagram.com/profile/...'},
        {key:'facebok', label:'facebook', icon:faFacebook,placeholder:'https://facebook.com/profile/...'},
        {key:'discord', label:'discord', icon:faDiscord ,placeholder:'https://Discord.com/profile/...'},
        {key:'tiktok', label:'tiktok', icon:faTiktok ,placeholder:'https://tiktok.com/profile/...'},
        {key:'youtube', label:'youtube', icon:faYoutube,placeholder:'https://youtube.com/profile/...'},
        {key:'whatsapp', label:'whatsapp', icon:faWhatsapp,placeholder:'+91 98899 99889'},
        {key:'github', label:'github', icon:faGithub,placeholder:'https://github.com/profile/...'},
        {key:'telegram', label:'telegram', icon:faTelegram,placeholder:'https://telegram.com/profile/...'},
    ];

    const pageSavedButtonsKeys = page && page.buttons ? Object.keys(page.buttons) : [];
    const pageSavedButtonsInfo=pageSavedButtonsKeys.map(k=>allButtons.find(b=>b.key==k));

    const [activeButtons,setActiveButtons]=useState(pageSavedButtonsInfo);

    function upperFirst(str){
        return str.slice(0,1).toUpperCase()+str.slice(1);
    }

    

    function addButtonsToProfile(button){
        setActiveButtons(prevButtons=>{
            return [...prevButtons, button];
        });
    }

    const availableButtons=allButtons.filter((b1)=>{
        return !activeButtons.find(b2=>b1.key==b2.key)
    })

    async function saveButtons(formData){
        await savePageButtons(formData);
        toast.success('Settings saved!');
    }

    function removeButton({key:keyToRemove}){
        setActiveButtons((prevButtons)=>{
            return prevButtons.filter(button=>button.key!=keyToRemove);
        });
    }

    return (
        <SectionBox>
            <form action={saveButtons}>
            <h2 className="text-2xl font-bold mb-4 ">Buttons</h2>
            <ReactSortable 
                handle=".handle"
                list={activeButtons} 
                setList={setActiveButtons}>
            {
                activeButtons.map((e)=>{
                    return (
                        <div key={e.key} className="mb-4 flex  items-center">

                            <div className="w-56 h-full p-2 flex gap-2 items-center">
                                <FontAwesomeIcon icon={faGripLines} className="cursor-pointer text-gray-500 handle p-2" />
                                <FontAwesomeIcon icon={e.icon} />
                                <span>{upperFirst(e.label)}</span>
                            </div>
                            <input
                                placeholder={e.placeholder}
                                name={e.key}
                                type="text" 
                                defaultValue={page && page.buttons ? page.buttons[e.key] : ''}
                                style={{marginBottom:'0'}} 
                            />
                            <button 
                                onClick={()=>removeButton(e)}
                                type="button" 
                                className="py-2 px-4 bg-gray-300 cursor-pointer" >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    );
                })
            }
            </ReactSortable>

            <div className="flex flex-wrap gap-2 mt-8 border-y py-4">
                {
                    availableButtons.map((e)=>{
                        return(  
                            <button 
                                type="button"
                                onClick={()=>addButtonsToProfile(e)}
                                className="flex items-center gap-2 p-2 bg-gray-200" 
                            >
                                <FontAwesomeIcon icon={e.icon} />
                                <span>{upperFirst(e.label)}</span>
                                <FontAwesomeIcon icon={faPlus}/>
                            </button>
                        );
                    })
                }
              
            </div>
            <div className="max-w-xs mx-auto mt-8">
                <SubmitButton>
                    <FontAwesomeIcon icon={faSave} />
                    <span> save</span>
                </SubmitButton>
            </div>
            </form>
          
        </SectionBox>
    );
}