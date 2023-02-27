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
    .page `https://www.microsoft.com/en-us`;

test('Selector Object Tests', async t => {
    await t
        .maximizeWindow()
        .click(Selector('a').withExactText('Windows'))
        .wait(10000)
        .click(Selector('button').withText('Computers'))
        .wait(5000)
        .click(Selector('a').withAttribute('id', 'c-shellmenu_79'))
        .wait(10000)
        .expect(Selector('span').withText('Create').exists).ok();
});