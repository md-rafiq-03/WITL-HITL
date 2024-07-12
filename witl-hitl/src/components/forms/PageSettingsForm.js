"use client";
import RadioTogglers from "../formItems/RadioTogglers";
import {
  faPalette,
  faImage,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import SubmitButton from "../buttons/SubmitButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import savePageSettings from "@/actions/pageActions";
import toast from "react-hot-toast";
import { useState } from "react";
import SectionBox from "../layout/SectionBox";

export default function PageSettingsForm({ page, user }) {
  const [bgType, setBgType] = useState(page.bgType);
  const [bgColor, setBgColor] = useState(page.bgColor);
  const [bgImage, setBgImage] = useState(page.bgImage);
  const [avatar,setAvatar]=   useState(user?.image);

  async function saveBaseSettings(formData) {
    const result = await savePageSettings(formData);
    if (result) {
      toast.success("Saved!");
    }
  }

  async function upload(ev,callbackFn){
    const file = ev.target.files?.[0];
    //console.log("file:", file);
    if (file) {
      const UploadPromise = new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append("file", file);
        //console.log("insed if");
        //console.log(formData.get("file"));
        fetch("/api/upload", {
          method: "POST",
          body: formData,
        }).then((response) => {
          if (response.ok) {
            response.json().then((link) => {
              //console.log("link", link);
              callbackFn(link);
              resolve(link);
            });
          } else {
            reject();
          }
        });
      });

      await toast.promise(UploadPromise, {
        loading: "Uploading...",
        success: "uploaded",
        error: "Upload error",
      });
    }
  }

  async function handleAvatarImageChange(ev){
    await upload(ev,link=>{
       setAvatar(link.data);
    })
    console.log(avatar);
  }

  async function handleCoverImageChange(ev) {
    await upload(ev,link=>{
        setBgImage(link.data);
    })
  }



  return (
    <div>
      <SectionBox>
      <form action={saveBaseSettings}>
        <div
          className=" -m-4 py-4 min-h-[300px] flex flex-col justify-center items-center bg-cover  bg-center "
          style={
            bgType === "color"
              ? { backgroundColor: bgColor }
              : { backgroundImage: `url(${bgImage})` }
          }
        >
          <RadioTogglers
            defaultValue={page?.bgType}
            options={[
              { value: "color", icon: faPalette, label: "Color" },
              { value: "image", icon: faImage, label: "Image" },
            ]}
            onChange={(val) => setBgType(val)}
          />
          {bgType == "color" && (
            <div className="bg-gray-200 shadow text-gray-700 p-2 mt-2">
              <div className="flex gap-2 justify-center">
                <span>Background color:</span>
                <input
                  type="color"
                  name="bgColor"
                  defaultValue={page.bgColor}
                  onChange={(ev) => setBgColor(ev.target.value)}
                />
              </div>
            </div>
          )}
          {bgType == "image" && (
            <div className="flex  mt-2">
              <label className="bg-white shadow px-4 py-2 gap-2 flex items-center cursor-pointer">
                <input type="hidden" name="bgImage" value={bgImage} />
                <input
                  type="file"
                  onChange={handleCoverImageChange}
                  className="hidden"
                />
                <FontAwesomeIcon
                  icon={faCloudArrowUp}
                  className="text-gray-700"
                />
                <span>Change Image</span>
              </label>
            </div>
          )}
        </div>

        <div className="flex justify-center -mb-12 ">
          <div className="relative -top-8 w-[128px] h-[128px] ">
            <div className="overflow-hidden h-full rounded-full border-4 border-white shadow shadow-black/50">
                <Image
                src={avatar}
                alt={"avatar"}
                width={128}
                height={128}
                className="h-full w-full object-cover"

                />
            </div>
          
            <label
              htmlFor="avatarIn"
              className="absolute -bottom-2 -right-4 bg-white p-2 rounded-full shadow shadow-black/50 aspect-square flex items-center"
            >
              <FontAwesomeIcon
                size={"xl"}
                icon={faCloudArrowUp}
                className="text-gray-700"
              />
            </label>
            <input type="file" id="avatarIn" className="hidden" onChange={handleAvatarImageChange} />
            <input type="hidden" name="avatar" value={avatar} />
          </div>
        </div>
        <div className="p-0">
          <label className="input-label " htmlFor="nameIn" >
            Display Name
          </label>
          <input
            type="text"
            id="nameIn"
            name="displayName"
            defaultValue={page.displayName}
            placeholder="John Doe"
          />

          <label className="input-label" htmlFor="locationIn">
            Location
          </label>
          <input
            type="text"
            id="locationIn"
            name="location"
            defaultValue={page.location}
            placeholder="Somewhere in the world"
          />

          <label className="input-label" htmlFor="bioIn">
            Bio
          </label>
          <textarea
            name="bio"
            defaultValue={page?.bio}
            id="bioIn"
            placeholder="Your bio goes here..."
          />

          <div className="max-w-[200px] mx-auto">
            <SubmitButton>
              <FontAwesomeIcon icon={faSave} />
              <span>save</span>
            </SubmitButton>
          </div>
        </div>
      </form>
      </SectionBox>
    </div>
  );
}
