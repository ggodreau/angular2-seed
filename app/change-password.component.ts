import { Component } from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';
import { PasswordValidators } from './passwordValidators';

// note do not add directives to component; needs explanation
@Component({
    selector: 'change-password',
    templateUrl: 'app/change-password.component.html',
})

export class ChangePassword {
    form: ControlGroup;

    constructor(fb : FormBuilder){
        this.form = fb.group({
            currentPassword: ['', Validators.compose([
                Validators.required,
                PasswordValidators.passwordIs1234
                ])
            ],
            newPassword: ['', Validators.compose([
                Validators.required,
                PasswordValidators.minimumFiveCharacters
                ])
            ],
            confirmPassword: ['', Validators.compose([
                Validators.required,
//                passwordMatchValidator
//                PasswordValidators.passwordMatch
                ])
            ]
        },{ validator : PasswordValidators.passwordMatch });
//        console.log("this form value = ",this.form.controls.currentPassword.value);
//        console.log("this form = ",this.form);
    }

    changePassword(){
        console.log("passwords match? ",this.form.errors.passwordsDoMatch);
        console.log("this.form = ",this.form);
//        console.log("form.errors: ",this.form.errors);
//        console.log("form: ",this.form);
    }

}
