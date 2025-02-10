import AWS from "aws-sdk";
import fs from "fs";
import { AWS_ACCESS_KEY_ID, AWS_S3_BUCKET_NAME, AWS_S3_BUCKET_URL, AWS_SECRET_ACCESS_KEY } from "../../config/keys";

// Configure MinIO Client
const s3 = new AWS.S3({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    endpoint: AWS_S3_BUCKET_URL,  // MinIO URL
    s3ForcePathStyle: true, // Required for MinIO
    signatureVersion: "v4", // MinIO uses AWS v4 signing
});

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