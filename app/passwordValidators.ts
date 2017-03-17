import { Control, ControlGroup } from 'angular2/common';

export class PasswordValidators {

    static minimumFiveCharacters(control: Control){
        if (control.value.length < 5)
            return { passwordTooShort : true };
            console.log("password too short:", control.value.length);
        return { passwordTooShort : false };
    }

    static passwordIs1234(control: Control){
        if (control.value != '1234')
            return { not1234 : true }
        return null;
    }
    
    static passwordMatch(group: ControlGroup){
        var control1 = group.find('newPassword').value;
        var control2 = group.find('confirmPassword').value;

        console.log("control1,control2: ", control1, control2);

        if (control1 == control2)
            return { passwordsDoMatch : true }
            console.log("passwords match!")
        return { passwordsDoMatch : false }
            console.log("no password match!")
//        console.log("controls = ",control1, control2);
    }

}
