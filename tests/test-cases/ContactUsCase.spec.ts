import { test, expect } from '@playwright/test'
import {ContactUs} from '../pages/ContactUs'
import {ContactUsSuccess} from '../pages/ContactUsSuccess'
import {ContactUsFail} from '../pages/ContactUsFail'


test.beforeEach(async ({page}) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //const button = page.getByTestId(/contact-us"/)
    //await button.click()
})

test('correct format', async ({page}) => {

    const contactUs = new ContactUs(page)

    const first_name: string = "Fergus"
    const last_name: string = "Beckerleg"
    const email: string = "test@test.com"
    const comment: string = "Test comment please ignore"

    await contactUs.validatePageLoad()
    await contactUs.fill_form(first_name,last_name,email,comment)

    const end_message: ContactUsSuccess = new ContactUsSuccess(page)
    await end_message.validatePageLoad()
    await expect(page.getByText('Thank You for your Message!')).toBeVisible()

})
test('incorrect email format', async ({page}) => {

    const contactUs = new ContactUs(page)

    const first_name: string = "Fergus"
    const last_name: string = "Beckerleg"
    const email: string = "test"
    const comment: string = "Test comment please ignore"

    await contactUs.validatePageLoad()
    await contactUs.fill_form(first_name,last_name,email,comment)

    const end_message: ContactUsFail = new ContactUsFail(page)
    await end_message.validatePageLoad()
    await expect(page.getByText('Error: Invalid email address')).toBeVisible()

})
test('incomplete form', async ({page}) => {

    const contactUs = new ContactUs(page)

    const first_name: string = ""
    const last_name: string = ""
    const email: string = "test@test.com"
    const comment: string = "Test comment please ignore"

    await contactUs.validatePageLoad()
    await contactUs.fill_form(first_name,last_name,email,comment)

    const end_message: ContactUsFail = new ContactUsFail(page)
    await end_message.validatePageLoad()
    await expect(page.getByText('Error: all fields are required')).toBeVisible()

})