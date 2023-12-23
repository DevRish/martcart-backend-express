import AWS from "aws-sdk";
import fs from "fs";
import { AWS_S3_BUCKET_NAME, AWS_S3_BUCKET_REGION } from "../../config/keys";

let s3: AWS.S3;

export async function setupStorageS3() {
    AWS.config.update({ region: AWS_S3_BUCKET_REGION });
    s3 = new AWS.S3();
}

export async function storeFileS3(dest: string, tempPath: string) {
    const readStream = fs.createReadStream(tempPath);
    const uploadParams = {
        Bucket: AWS_S3_BUCKET_NAME,
        Key: dest,
        Body: readStream
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