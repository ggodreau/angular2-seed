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
            currentPassword: ['', Validators.required],
            newPassword: ['', Validators.compose([
                Validators.required,
                PasswordValidators.minimumFiveCharacters,
                PasswordValidators.passwordMatch
                ])
            ],
            confirmPassword: ['', Validators.compose([
                Validators.required,
                PasswordValidators.passwordMatch
                ])
            ]
        },
        { passwordMatchValidator : PasswordValidators.passwordMatch }
        );
//        console.log("this form value = ",this.form.controls.currentPassword.value);
//        console.log("this form = ",this.form);
    }

//    printPassword(){
//        console.log(this.form.controls.currentPassword.value);
//    }

}
