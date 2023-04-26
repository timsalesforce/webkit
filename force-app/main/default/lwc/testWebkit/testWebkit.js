import { LightningElement } from 'lwc';

export default class TestWebkit extends LightningElement {
    connectedCallback() {
       
    }

    handleClick() {
        debugger;
        webkit.messagehandlers.callbackHandler.postMessage('hello');
    }
}