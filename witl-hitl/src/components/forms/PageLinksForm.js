"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionBox from "../layout/SectionBox";
import { faEnvelope, faPlus } from "@fortawesome/free-solid-svg-icons";
import SubmitButton from "../buttons/SubmitButton";

export default  function PageLinksForm({page,user}){

    function save(formData){

    }

    return (
        <SectionBox>
            <h2 className="text-2xl font-bold">Links</h2>
            <form action={save}>
                <button type="button" className="text-blue-500 text-lg flex gap-2 items-center cursor-pointer">
                    <FontAwesomeIcon icon={faPlus} className="bg-blue-500 text-white p-1 rounded-full aspect-square" />
                    <span>Add new</span>
                </button>
                <div>
                    <SubmitButton>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>save</span>
                    </SubmitButton>
                </div>
            </form>
        </SectionBox>
    );
}