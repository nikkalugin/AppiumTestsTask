class WindowsLinkScreen {
    get windowsLinkOffBtn() {
        return $('~Link to Windows,Off.,Button');
    }

    get windowsLinkOnBtn() {
        return $('~50182laptop,On.,Button');
    }

    get shareFilesBtn() {
        return $('android=new UiSelector().className("android.widget.Button").instance(1)');
    }

    get confirmationText() {
        return $('android=new UiSelector().text("Sent")');
    }

    async clickWindowsLinkBtn() {
        await this.windowsLinkOffBtn.click();
    }

    async verifyBtnIsOn() {
        await this.windowsLinkOnBtn.waitForDisplayed();
        await expect(this.windowsLinkOnBtn).toBeDisplayed();
    }

    async clickShareFilesBtn() {
        await this.shareFilesBtn.click();
    }

    async verifyFileIsSend() {
        await expect(this.confirmationText).toBeDisplayed();
    }
}

export default new WindowsLinkScreen();