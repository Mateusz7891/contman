"use strict";

const MainContmanMenuPage = require("../page_objects/main.js");
const ContactPageTest = require("../page_objects/contactPage.js");

describe('angularjs homepage todo list', function() {

    it('should check phone number', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://contman.github.io/testing_pages/');

        var mainContmanMenu = new MainContmanMenuPage();
        var contactPage = new ContactPageTest();

        mainContmanMenu
            .clickContact();

            expect(contactPage.telephoneNumber.getText()).toContain("500 600 700")

    });
});