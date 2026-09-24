const {expect}=require('@playwright/test')
class HomePage {
    constructor(page) {
        this.page = page;
        this.manageapplication = page.locator("//span[normalize-space()='Manage']");
        this.menu = page.locator("img[alt='menu']");
        this.logoutOption = page.locator("//button[normalize-space()='Signout']");
    }
    async verifyManageOpeiont(){
        await expect(this.page.locate(this.manageapplication)).tobeVisible();
    }
    async logoutFromApplication() {
        await this.menu.click(this.menu);
        await this.logoutOption.click(this.logoutOption);
    }
}

module.exports = HomePage;