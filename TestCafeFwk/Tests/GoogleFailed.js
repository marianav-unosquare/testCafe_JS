import {Selector} from 'testcafe';

fixture`Getting Started`
.page`https://www.google.com`

test('TC01 - Google TestCafe ', async t => {
await t
    .maximizeWindow()
    .typeText('input[name = "q"]', 'Test Cafe Automation')
    .pressKey('enter')
    .click(Selector('h3').withText('TestCafe'))
    .click(Selector('a').withAttribute('href',"/documentation/402635/getting-started"))
    .expect(Selector('a').withAttribute('class',"activeFAILED").exists).ok();
});