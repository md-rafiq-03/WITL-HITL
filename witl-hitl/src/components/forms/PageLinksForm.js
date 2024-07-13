"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionBox from "../layout/SectionBox";
import { faEnvelope, faPlus } from "@fortawesome/free-solid-svg-icons";
import SubmitButton from "../buttons/SubmitButton";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default  function PageLinksForm({page,user}){
    const [links,setLinks]=useState(page.links || []);

    function save(formData){
    }

    function addNewLinks(){
        setLinks((prev)=>{
            return [...prev,{title:'',subTitle:'',icon:'',url:''}];
        });
    }

    return (
        <SectionBox>
            <h2 className="text-2xl font-bold">Links</h2>
            <form action={save}>
                <button 
                    onClick={addNewLinks}
                    type="button" 
                    className="text-blue-500 text-lg flex gap-2 items-center cursor-pointer"
                >
                    <FontAwesomeIcon icon={faPlus} className="bg-blue-500 text-white p-1 rounded-full aspect-square" />
                    <span>Add new</span>
                </button>

                <div >
                    {console.log("abc")}
                    <span>abc</span>
                </div>

                <div className="border-t pt-4 mt-4 ">
                    <div className="max-w-xs mx-auto">
                        <SubmitButton >
                            <FontAwesomeIcon icon={faSave} />
                            <span>save</span>
                        </SubmitButton>
                    </div>
                </div>
            </form>
        </SectionBox>
    );
}