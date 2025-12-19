import fs from 'fs';
import path from 'path';

export async function waitForFile(
    directory,
    fileName,
    timeout = 15000,
    interval = 500
) {
    const filePath = path.join(directory, fileName);
    const startTime = Date.now();

    while (Date.now() - startTime < timeout) {
        if (fs.existsSync(filePath)) {
            return filePath;
        }
        await new Promise(res => setTimeout(res, interval));
    }

    throw new Error(`File ${fileName} was not found in ${directory}`);
};

export function deleteFile(filePath) {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`File deleted: ${filePath}`);
    }
}