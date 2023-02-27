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
        this.selectStayAus= Selector('.btn.btn-primary.btn-block.redirect-reject.preferred-redirect-reject')
        this.addToCart= Selector('button').withAttribute('aria-label', 'Add to cart');
        this.headerCartSection= Selector('h1').withText('Cart');
        this.checkoutBtn= Selector('button').withText('Checkout');
        this.closeSignMeUp= Selector('button').withAttribute('aria-label','Close dialog window');
        this.addToCartFinal= Selector('button').withAttribute('class', 'btn.btn-primary.btn-block');
    }

    async selectLanguage() {
        

        if(await this.LanguageSelect.exists){
            await t.click(this.LanguageSelect)}
        
        await t.click(this.EnglishSelect);
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
        if(await this.selectStayAus.exists)
            await t.click(this.selectStayAus)
        await t
        .wait(2000)
        if(await this.closeSignMeUp.exists){
                await t.click(this.closeSignMeUp)
            }
        
        await t
        .wait(2000)
        .scroll(0,300)
        .click(this.addToCart)
        

        await t
        .wait(5000)
        .expect((this.headerCartSection).visible).ok()
        .expect((this.checkoutBtn).visible).ok();
    
    }

}

export default new Page();