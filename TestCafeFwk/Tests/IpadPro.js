import { Selector } from 'testcafe';

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
    .page`https://www.apple.com/`;

test('My Buy IpadPro test', async t => {
    await t
    .maximizeWindow()
    .expect(Selector('a[id="globalnav-menubutton-link-search"]').visible).ok()
    .click(Selector('a[id="globalnav-menubutton-link-search"]'))
    .typeText('input[class="globalnav-searchfield-input"]', 'iPad Pro')
    WebGLActiveInfo(3000)
    .click(Selector('span').withText('iPad Pro'))
    .click(Selector('a').withText('Buy'))
    .expect(Selector(getElementsByXPath('//img')).count).gt(2)
    .expect(Selector('h1').withText('Buy iPad Pro').visible).ok();
});
