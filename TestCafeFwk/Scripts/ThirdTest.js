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
    .page`https://www.unosquare.com/ContactUs`;

test('TC01 - Fill data in contact page', async t => {
    await t
    .maximizeWindow()
    .expect(Selector('input[name = "firstname"]').visible).ok()
    .typeText('input[name = "firstname"]', 'My Name')
    .typeText('input[name = "email"]', 'Myemail@unosquare.com')
    .typeText('textarea[name = "message"]', 'The script can write a message!')
    .scrollBy(0, -500)
    .click(Selector(getElementsByXPath("//div[@class='elementor-element elementor-element-fdff709 elementor-hidden-mobile elementor-widget__width-auto elementor-widget elementor-widget-button']//a[@role='button']")));

});

test('TC02 - Go to About Pagee', async t => {
    await t
    .click(Selector(getElementsByXPath("//a[@class='elementor-button-link elementor-button elementor-size-lg']")))
});

//Override the fixture URL
test
    .page`https://www.google.com`
    ('TC03 - Fixture URL Override', async t => {
    await t
        .typeText('input[name = "q"]', 'Test Cafe Automation')

        

});