"use Server"
import { NextResponse } from "next/server";
import cloudinary from "../../../libs/cloudinary";
import axios from 'axios'
export async function POST(request) {
    console.log(request.formData);
  try {
    const CLOUDINARY_UPLOAD_PRESET= process.env.CLOUDINARY_UPLOAD_PRESET;
    const CLOUDINARY_CLOUD_NAME= process.env.CLOUDINARY_CLOUD_NAME;


    console.log("Cloudinary Configuration:", cloudinary.config());

    const requestFormData = await request.formData();
    if (!requestFormData.get('file')) {
      return NextResponse.json(
        { success: false, error: "No image provided" },
        { status: 400 }
      );
    }
    console.log(requestFormData.get('image'));
    const imageFile=requestFormData.get('image');


    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    console.log("formaData",formData);
    const ImageResponse = await axios.post(
      "https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload",
      formData
    );
    console.log(ImageResponse.data.secure_url);
  
    console.log("Upload Successful:", ImageResponse.data.secure_url);
    return NextResponse.json(
      { success: true, data: ImageResponse.data.secure_url },
      { status: 200 }
    );
  } catch (error) 
  {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}