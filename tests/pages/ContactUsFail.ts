import {expect, Locator, Page} from '@playwright/test';

export class ContactUsFail {

    page: Page;

    constructor(page: Page) {
        this.page = page
    }
    async validatePageLoad() {
        await this.page.waitForLoadState('domcontentloaded')
        //await this.page.waitForLoadState('networkidle')
        await expect(this.page).toHaveTitle(/Contact form handler/)
    }
}