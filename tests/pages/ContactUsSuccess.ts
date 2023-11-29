import {expect, Locator, Page} from '@playwright/test';

export class ContactUsSuccess {

    page: Page;

    constructor(page: Page) {
        this.page = page
    }
    async validatePageLoad() {
        await this.page.waitForLoadState('domcontentloaded')
        //await this.page.waitForLoadState('networkidle')
        await expect(this.page).toHaveTitle(/Gianni Bruno/)
    }
}