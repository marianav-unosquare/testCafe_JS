import { Selector , t } from 'testcafe';



class Page {
    constructor () {
        this.nameInput = Selector('input').withAttribute('name',"firstname");
        this.emailInput = Selector('input').withAttribute('name', 'email');
        this.msgInput= Selector('textarea').withAttribute('name','message');
        this.sumbitBtn= Selector('input').withAttribute('type', 'sumbit');
        this.errorMsj1= Selector('div[class="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field"] label[class="hs-error-msg"]');
        this.errorMsj2 = Selector('div[class="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field"] label[class="hs-error-msg"]');
    }

    async submitName() {
        await t
        .click(this.nameInput)
        .click(this.emailInput)
        .click(this.msgInput)
    }

}

export default new Page();