import { driver } from '@wdio/globals'
import { terminateApp, activateApp, scrollDown, scrollUp, zoomIn } from '../helpers/appStatesHelper';
import WindowsLinkScreen from '../page-objects/screen/WindowsLinkScreen';
import GalleryScreen from '../page-objects/screen/GalleryScreen';
import { waitForFile, deleteFile } from '../helpers/fileCheck';

describe('Tests with sending files', () => {
    let receivedFilePath;

    after(async () => {
        if (receivedFilePath) {
            deleteFile(receivedFilePath);
        }
        await terminateApp("com.microsoft.appmanager");
        await terminateApp('com.sec.android.gallery3d');
    });

    it('Sending pic to linked Computer', async () => {
        await scrollDown(2);
        await WindowsLinkScreen.clickWindowsLinkBtn();
        await WindowsLinkScreen.verifyBtnIsOn();
        await scrollUp(2);
        await activateApp('com.sec.android.gallery3d');
        await GalleryScreen.openTestPhotoSettings();
        await GalleryScreen.openLinkToWindowsForm();
        await WindowsLinkScreen.clickShareFilesBtn();
        await WindowsLinkScreen.verifyFileIsSend();
        receivedFilePath = await waitForFile(
            'C:/Users/QA-user/Downloads/Phone Link',
            'TestScreen.jpg',
            20000
        );
        console.log(`File received on PC: ${receivedFilePath}`);
    });
});

describe.only('Zooming photos', () => {
    it('Zooming one photo', async () => {
        await activateApp('com.sec.android.gallery3d');
        await GalleryScreen.testScreenRecord.click();
        await driver.pause(500);
        await driver.saveScreenshot('./screens/before.png');
        await zoomIn();
        await driver.saveScreenshot('./screens/after.png');
        await terminateApp('com.sec.android.gallery3d');
    });
});