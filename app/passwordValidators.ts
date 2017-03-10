import { Control } from 'angular2/common';

export class PasswordValidators {

    static minimumFiveCharacters(control: Control){
        console.log("control =", control);
        console.log("control.value.length =", control.value.length);
    }
}
