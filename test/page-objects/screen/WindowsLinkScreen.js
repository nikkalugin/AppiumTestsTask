class WindowsLinkScreen {
    get windowsLinkOffBtn() {
        return $('~Link to Windows,Off.,Button');
    }

    get windowsLinkOnBtn() {
        return $('~MyGoodBoy,On.,Button');
    }

    get shareFilesBtn() {
        return $('~Tap to share files');
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

    async verifyFileIsSend(text) {
        await expect(text).toBeDisplayed();
    }
}

export default new WindowsLinkScreen();