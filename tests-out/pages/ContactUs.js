"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactUs = void 0;
const test_1 = require("@playwright/test");
class ContactUs {
    page;
    first_name_box;
    last_name_box;
    email_box;
    comment_box;
    submit_button;
    constructor(page) {
        this.page = page;
        this.first_name_box = page.getByPlaceholder('First Name');
        this.last_name_box = page.getByPlaceholder('Last Name');
        this.email_box = page.getByPlaceholder('Email Address');
        this.comment_box = page.getByPlaceholder('Comments');
        this.submit_button = page.getByRole('button', { name: 'SUBMIT' });
    }
    async validatePageLoad() {
        await this.page.waitForLoadState('domcontentloaded');
        //await this.page.waitForLoadState('networkidle')
        await (0, test_1.expect)(this.page).toHaveTitle(/Contact Us/);
    }
    async fill_form(first_name, last_name, email, comments) {
        await this.first_name_box.fill(first_name);
        await this.last_name_box.fill(last_name);
        await this.email_box.fill(email);
        await this.comment_box.fill(comments);
        await this.submit_button.click();
    }
}
exports.ContactUs = ContactUs;
//# sourceMappingURL=ContactUs.js.map