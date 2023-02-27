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
    .page`https://blog.unosquare.com/tag/software-development`;


test("TC01 - Validate Unosquare's blog functionality 1", async t=> {
    await t
    .maximizeWindow()
    .expect(Selector('h1').withAttribute('class','elementor-heading-title elementor-size-default').visible).ok()
    .takeElementScreenshot(Selector('div').withAttribute('class','elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-81e31b8'))
    .expect(Selector(getElementsByXPath('//img')).count).gt(5)
    .click(Selector('a').withAttribute('aria-label','Read more about Scripting and Programming Languages: Differences, Advantages, and Optimal Use Cases'))
    .wait(3000)
    .expect(Selector('h1').withText('Scripting and Programming Languages: Differences, Advantages, and Optimal Use Cases').visible).ok();

});

test("TC02 - Validate Unosquare's blog functionality 2", async t=> {
    await t
    .maximizeWindow()
    .expect(Selector('h1').withAttribute('class','elementor-heading-title elementor-size-default').visible).ok()
    .click(Selector(getElementsByXPath('//div[@class="elementor-element elementor-element-fdff709 elementor-hidden-mobile elementor-widget__width-auto elementor-widget elementor-widget-button"]//a[@role="button"]')))
    .wait(3000)
    .takeScreenshot({
        path:     'screenshots/myfullscreenshot.png',
        fullPage: true,
    })
    .expect(Selector('h1').withText('Contact Us').visible).ok()
    .expect(Selector('input[name = "firstname"]').visible).ok()
    .typeText('input[name = "firstname"]', 'My Name')
    .typeText('input[name = "email"]', 'Myemail@unosquare.com')
    .typeText('textarea[name = "message"]', 'The script can write a message!')
   
});
