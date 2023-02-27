import { Selector, t } from 'testcafe';

class Page {
    constructor() {
        this.LanguageSelect = Selector('#locale-picker-link');
        this.EnglishSelect = Selector('a').withText('English');
        this.searchBtn = Selector('#search');
        this.searchTextBox= Selector('#cli_shellHeaderSearchInput');
        this.shopOption=Selector('a').withAttribute('aria-label','Shop pivot');
        this.headerShopSection= Selector('h4').withText('Hardware and Accessories');
        this.headsetShop= Selector('a').withAttribute('aria-label','Microsoft Modern Wireless Headset');
        this.closePopUp= Selector('button').withAttribute('aria-label', 'Cancel');
        this.addToCart= Selector('button').withAttribute('aria-label', 'Add to cart');
        this.headerCartSection= Selector('h1').withText('Cart');
        this.checkoutBtn= Selector('button').withText('Checkout');
    }

    async selectLanguage() {
        await t
            .click(this.LanguageSelect)
            .click(this.EnglishSelect);
    }

    async searchItem(itemName){
        await t
        .click(this.searchBtn)
        .typeText(this.searchTextBox, itemName)
        .pressKey('enter')
    }

    async ShopActions(){
        await t
        .click(this.shopOption)
        .expect((this.headerShopSection).visible).ok()
        .wait(2000)
        .click(this.headsetShop)
        .wait(2000)
        if(await this.closePopUp.exists)
            await t.click(this.closePopUp)
        
        await t
        .click(this.addToCart)
        .expect((this.headerCartSection).visible).ok()
        .expect((this.checkoutBtn).visible).ok();

    }

}

export default new Page();