import { Control, ControlGroup } from 'angular2/common';

export class PasswordValidators {

    static minimumFiveCharacters(control: Control){
        if (control.value.length < 5)
            return { passwordTooShort : true };
//            console.log("password too short:", control.value.length);
        return { passwordTooShort : false };
    }
    
    static passwordMatch(group: ControlGroup){
//        var control1 = group.find(‘newPassword’);
//        var control2 = group.find(‘confirmPassword’);
//        console.log("controls = ",control1, control2);
        console.log("password control group =", group);
    }

}
