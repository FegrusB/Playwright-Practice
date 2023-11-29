"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactUsFail = void 0;
const test_1 = require("@playwright/test");
class ContactUsFail {
    page;
    constructor(page) {
        this.page = page;
    }
    async validatePageLoad() {
        await this.page.waitForLoadState('domcontentloaded');
        //await this.page.waitForLoadState('networkidle')
        await (0, test_1.expect)(this.page).toHaveTitle(/Contact form handler/);
    }
}
exports.ContactUsFail = ContactUsFail;
//# sourceMappingURL=ContactUsFail.js.map