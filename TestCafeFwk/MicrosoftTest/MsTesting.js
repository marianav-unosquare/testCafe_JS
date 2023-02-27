import page from '../PageObjects/MsTesting';

fixture.disablePageReloads `Getting Started`
    .page`https://www.microsoft.com/es-mx/`
    .before(async ctx => {
        const data = require("../DataFiles/SearchFile.json");
        ctx.item1 = data.item1;
        ctx.item2 = data.item2;
    })

test('TC01 -  Ms webpage using hooks', async t =>{
    await t
    .maximizeWindow()
    await page.selectLanguage();
    await page.searchItem(t.fixtureCtx.item1)
    await t
    .wait(2000)
    await page.ShopActions();
});

