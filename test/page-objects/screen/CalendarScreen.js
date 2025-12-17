class CalendarScreen {
    get calendarChristmasDay() {
        return $('android=new UiSelector().text("2025-12-25")');
    }

    get christmasFestNote() {
        return $('//android.widget.TextView[@content-desc=" , Christmas Day"]');
    }

    get noteField() {
        return $('id=com.samsung.android.calendar:id/swipe_touch_layout');
    }

    get openedNoteField() {
        return $('id=com.samsung.android.calendar:id/quick_add_activity_edit_text');
    }

    get saveBtn() {
        return $('~Save');
    }

    get festNote() {
        return $('android=new UiSelector().text("Test")');
    }

    async clickChristmasDay() {
        await this.calendarChristmasDay.click();
    }

    async verifyChristmasDay() {
        await expect(this.christmasFestNote).toBeDisplayed();
    }

    async openFieldAndFillValue(value) {
        await this.noteField.click();
        await this.openedNoteField.setValue(value);
    }

    async clickSaveBtn() {
        await this.saveBtn.click();
    }

    async verifyAddedFestRecord(value) {
        await expect(this.festNote).toHaveText(value);
    }
}

export default new CalendarScreen();