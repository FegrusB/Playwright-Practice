"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactUsSuccess = void 0;
const test_1 = require("@playwright/test");
class ContactUsSuccess {
    page;
    constructor(page) {
        this.page = page;
    }
    async validatePageLoad() {
        await this.page.waitForLoadState('domcontentloaded');
        //await this.page.waitForLoadState('networkidle')
        await (0, test_1.expect)(this.page).toHaveTitle(/Gianni Bruno/);
    }
}
exports.ContactUsSuccess = ContactUsSuccess;
//# sourceMappingURL=ContactUsSuccess.js.map