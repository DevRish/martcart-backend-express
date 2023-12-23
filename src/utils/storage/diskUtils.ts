import fs from "fs";
import { PUBLIC_DIR, IMAGE_DIR } from "../../config/keys";

async function checkExists(path: string) {
    try {
        await fs.promises.access(path);
        return true;
    } catch (e) {
        return false;
    }
}

async function createIfNotExists(path: string) {
    try {
        await fs.promises.access(path);
    } catch (e) {
        await fs.promises.mkdir(path);
    }
}

export async function setupStorage() {
    await createIfNotExists(PUBLIC_DIR);
    await createIfNotExists(IMAGE_DIR);
}

export async function storeFile(dest: string, tempPath: string) {
    const readStream = fs.createReadStream(tempPath);
    const writeStream = fs.createWriteStream(dest);
    readStream.pipe(writeStream);
}

export async function getFile(path: string) {
    if(await checkExists(path)) {
        return await fs.promises.readFile(path);
    }
    throw new Error("File doesn't exist!!");
}

export async function deleteFile(path: string) {
    if(await checkExists(path)) {
        return await fs.promises.rm(path);
    }
}