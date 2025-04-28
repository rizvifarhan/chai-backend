/*
1. user se file upload - through multer only
2. cloudinary sdk kya karta hai - aap se file leti hai aur apne server pe upload kar deti hai
Hum kya karenge:
1) multer ka use karte hue user se file leke temporary local server pe store kardenge
2) cloudinary ka use karte hue iss local server se file leke uske apne server pe daal denge
*/

import {v2 as cloudinary} from "cloudinary"
import { log } from "console";
import fs from "fs"

//fs - file system in node - read,write,remove etc

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file uploaded successfully
        fs.unlinkSync(localFilePath)
        //console.log(response);
        
        return response
        
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null
    }
}


export {uploadOnCloudinary}