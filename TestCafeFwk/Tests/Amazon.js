import { Selector } from 'testcafe';
import page from '../PageObjects/pageObjAmazon.js';


const getElementsByXPath = Selector(xpath => {
    const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
    const items = [];
    let item = iterator.iterateNext();
    while (item) {
        items.push(item);
        item = iterator.iterateNext();
    }
    return items;
});
export default function (xpath) {
    return Selector(getElementsByXPath(xpath));
}

fixture`Getting Started`
    .page`https://www.google.com`;

test('TC01 -  Probar funcionalidades de Amazon', async t =>{
    
    await t
    .maximizeWindow()
    .typeText(page.searchBarInput, 'Amazon US')
    .pressKey('enter')
    .click(page.googleLink)
    .wait(3000)
    .typeText(page.nameInput, 'Samsung Galaxy Note 20');
    console.log(firstPrice.innerText);

   await t
    .click(page.submitBtn)
    .wait(3000)
    .click(page.firstItemLst)
    .wait(3000)
    .expect(page.firstItemTitle.visible).ok();
    
    console.log(page.secondPrice.innerText);
    console.log("all good up to here");

    await t
    .click(page.addToCartBtn);

});

