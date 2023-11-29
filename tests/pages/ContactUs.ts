import {expect, Locator, Page} from '@playwright/test';

export class ContactUs {

    page: Page;
    private first_name_box: Locator;
    private last_name_box: Locator;
    private email_box: Locator;
    private comment_box: Locator;
    private submit_button: Locator;

    constructor(page: Page) {
        this.page = page
        this.first_name_box = page.getByPlaceholder('First Name')
        this.last_name_box = page.getByPlaceholder('Last Name')
        this.email_box = page.getByPlaceholder('Email Address')
        this.comment_box= page.getByPlaceholder('Comments')
        this.submit_button = page.getByRole('button',{name: 'SUBMIT'})
    }

    async validatePageLoad() {
        await this.page.waitForLoadState('domcontentloaded')
        //await this.page.waitForLoadState('networkidle')
        await expect(this.page).toHaveTitle(/Contact Us/)
    }


    async fill_form(first_name: string, last_name: string, email: string, comments: string) {
        await this.first_name_box.fill(first_name)
        await this.last_name_box.fill(last_name)
        await this.email_box.fill(email)
        await this.comment_box.fill(comments)
        await this.submit_button.click()
    }
}