import { Selector } from 'testcafe';
import page from '../PageObjects/ContactUs.js'


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
    .page`https://www.unosquare.com/contact-us/`;

test('TC01 -  Probar funcionalidades de Amazon', async t =>{    
    await t
    .maximizeWindow()
    await page.submitName();
    await t.expect((page.errorMsj1).visible).ok();
    await t.expect((page.errorMsj1).innerText).contains('Please complete this required field.');
    await t.expect((page.errorMsj2).visible).ok();

});