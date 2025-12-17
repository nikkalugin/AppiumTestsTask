import { } from '@wdio/globals'
import { activateApp, terminateApp, openMenu } from '../helpers/appStatesHelper';
import CalendarScreen from '../page-objects/screen/CalendarScreen';
import BluetoothScreen from '../page-objects/screen/BluetoothScreen';
import GalleryScreen from '../page-objects/screen/GalleryScreen';
import HomeScreen from '../page-objects/screen/HomeScreen';

describe('Tests with real device (on calendar)', () => {
    beforeEach(async () => {
        await activateApp("com.samsung.android.calendar");
    });

    afterEach(async () => {
        await terminateApp("com.samsung.android.calendar");
    });

    it('Opening Calendar on mobile', async () => {
        await CalendarScreen.clickChristmasDay();
        await CalendarScreen.verifyChristmasDay();
    });

    it('Writing something on Calendar field', async () => {
        await CalendarScreen.openFieldAndFillValue('Test');
        await CalendarScreen.clickSaveBtn();
        await CalendarScreen.verifyAddedFestRecord('Test');
    });
});

describe('Tools with driver', () => {
    before(async () => {
        await openMenu();
        await BluetoothScreen.openBluetoothScanMenu();
        await BluetoothScreen.verifyBluetoothScanMenuIsOpen();
        await BluetoothScreen.clickBluetoothedTestDeviceRecord();
        await BluetoothScreen.closeBluetoothMenu();
    })
    
    it('Sending file by using Bluetooth', async () => {
        await HomeScreen.openGallery();
        await GalleryScreen.openTestPhotoSettings();
        await GalleryScreen.openBluetoothForm();
        await BluetoothScreen.clickBluetoothedTestDeviceRecord();
        await GalleryScreen.verifySuccessfulSending();
    });
});