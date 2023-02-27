import { Selector } from 'testcafe';

class Page {
    constructor () {
        this.searchBarInput = Selector('input').withAttribute('name','q');
        this.googleLink= Selector('h3').withText('Amazon.com. Spend less. Smile more.')
        this.nameInput = Selector('input').withAttribute('id',"twotabsearchtextbox");
        this.submitBtn = Selector('input').withAttribute('id', 'nav-search-submit-button');
        this.secondPrice= Selector('span').withAttribute('id','renewedBuyBoxPrice');
        this.firstPrice= Selector('span').withAttribute('class','a-price-whole');
        this.firstItemLst= Selector('a').withAttribute('class', 'a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal');
        this.firstItemTitle=Selector('span').withAttribute('id', 'productTitle');
        this.addToCartBtn = Selector('input').withAttribute('id','add-to-cart-button');
    }
}

export default new Page();