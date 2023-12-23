import AWS from "aws-sdk";
import fs from "fs";
import { AWS_ACCESS_KEY_ID, AWS_S3_BUCKET_NAME, AWS_S3_BUCKET_REGION, AWS_SECRET_ACCESS_KEY } from "../../config/keys";

AWS.config.update({ 
    region: AWS_S3_BUCKET_REGION,
    credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
    }
});

const s3 = new AWS.S3();

export async function storeFileS3(key: string, tempPath: string, mimeType: string) {
    const readStream = fs.createReadStream(tempPath);
    const uploadParams = {
        Bucket: AWS_S3_BUCKET_NAME,
        Key: key,
        Body: readStream,
        "Content-Type": mimeType,
        "Content-Disposition": "inline"
    };
    await s3.upload(uploadParams).promise();
}

export async function getFileS3(path: string) {
    const params = {
        Bucket: AWS_S3_BUCKET_NAME,
        Key: path
    };
    const data = await s3.getObject(params).promise();
    return data.Body;
}

export async function deleteFileS3(path: string) {
    const params = {
        Bucket: AWS_S3_BUCKET_NAME,
        Key: path
    };
    await s3.deleteObject(params).promise();
}