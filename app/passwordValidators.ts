import { Control, ControlGroup } from 'angular2/common';

export class PasswordValidators {

    static minimumFiveCharacters(control: Control){
        if (control.value.length < 5)
            return { passwordTooShort : true };
            console.log("password too short:", control.value.length);
        return { passwordTooShort : false };
    }
    
    static passwordMatch(group: ControlGroup){
        var control1 = group.find('currentPassword').value;
        var control2 = group.find('newPassword').value;

        console.log("control1,control2: ", control1, control2);

        if (control1 == control2)
            return { passwordsDoMatch : true }
            console.log("passwords match!")
        return { passwordsDoMatch : false }
            console.log("no password match!")
//        console.log("controls = ",control1, control2);
    }

}
