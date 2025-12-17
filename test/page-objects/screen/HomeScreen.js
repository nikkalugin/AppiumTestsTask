class HomeScreen {
    get galleryIcon() {
        return $('~Gallery');
    }

    async openGallery() {
        await this.galleryIcon.click();
    }
}

export default new HomeScreen();