"use strict";


class mainContmanMenu{

    constructor() {

        this.contactBtn = element(by.cssContainingText("#navbarResponsive .nav-link", "Contact"));

    }


    clickContact() {

        this.contactBtn.click();
    }
}

module.exports = mainContmanMenu;