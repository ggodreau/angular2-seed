import { Control } from 'angular2/common';

export class PasswordValidators {

    static minimumFiveCharacters(control: Control){
        if (control.value.length < 5)
            return { passwordTooShort : true };
//            console.log("password too short:", control.value.length);
        return { passwordTooShort : false };
    }
}
