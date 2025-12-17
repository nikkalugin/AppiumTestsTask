class BluetoothScreen {
    get bluetoothIcon() {
        return $('~Bluetooth,Off.,Button');
    }

    get bluetoothScanningMenu() {
        return $('id=com.android.settings:id/bluetooth_scan_dialog_fragment_layout');
    }

    get bluetoothedTestDeviceRecord() {
        return $('android=new UiSelector().text("MYGOODBOY")');
    }

    get doneBtn() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }

    async openBluetoothScanMenu() {
        await this.bluetoothIcon.click();
    }

    async verifyBluetoothScanMenuIsOpen() {
        await this.bluetoothScanningMenu.waitForDisplayed();
        await expect(this.bluetoothScanningMenu).toBeDisplayed();
    }

    async clickBluetoothedTestDeviceRecord() {
        await this.bluetoothedTestDeviceRecord.click();
    }

    async closeBluetoothMenu() {
        await this.doneBtn.click();
    }
}

export default new BluetoothScreen();