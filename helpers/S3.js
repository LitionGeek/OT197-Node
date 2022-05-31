const AWS = require('aws-sdk');
const fs = require('fs');

const access = new AWS.S3({
    accessKeyId: process.env.AWS_KEY_ID ,
    secretAccessKey: process.env.AWS_SECRET_KEY 
}); 

const uploadFile = async(file,extension)=>{
    const params = {
       Bucket: process.env.BUCKET ,
       Key:`${new Date().getTime()}.${extension}`,
       ContentType:`image/${extension}`,
       Body:Buffer.from(file,'base64')
   }
    return new Promise((resolve,reject)=>{
        access.upload(params,(error,data)=>{
            if(error){
               reject(error); 
            }
            resolve(data);
        })
    })
    
}

module.exports = uploadFile;