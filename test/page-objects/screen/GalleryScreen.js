class GalleryScreen {
    get testScreenRecord() {
        return $('(//android.widget.FrameLayout[@resource-id="com.sec.android.gallery3d:id/deco_view_layout"])[11]');
    }

    get shareBtn() {
        return $('~Share');
    }

    get bluetoothBtn() {
        return $('android=new UiSelector().resourceId("android:id/icon").instance(6)');
    }

    get successfulNotification() {
        return $('android=new UiSelector().text("Sending succeed")');
    }

    async openTestPhotoSettings() {
        await this.testScreenRecord.click();
        await this.shareBtn.click();
    }

    async openBluetoothForm() {
        await this.bluetoothBtn.click();
    }

    async verifySuccessfulSending() {
        await expect(this.successfulNotification).toBeDisplayed();
    }
}

export default new GalleryScreen();