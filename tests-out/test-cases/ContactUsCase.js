"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const ContactUs_1 = require("../pages/ContactUs");
const ContactUsSuccess_1 = require("../pages/ContactUsSuccess");
test_1.test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const button = page.getByTitle('contact-us');
    await button.click();
});
(0, test_1.test)('correct format', async ({ page }) => {
    const contactUs = new ContactUs_1.ContactUs(page);
    const first_name = "Fergus";
    const last_name = "Beckerleg";
    const email = "test@test.com";
    const comment = "Test comment please ignore";
    await contactUs.validatePageLoad();
    await contactUs.fill_form(first_name, last_name, email, comment);
    const end_message = new ContactUsSuccess_1.ContactUsSuccess(page);
    await end_message.validatePageLoad();
    await (0, test_1.expect)(page.getByText('Thank You for your Message!')).toBeVisible();
});
//# sourceMappingURL=ContactUsCase.js.map