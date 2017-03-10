import { Component } from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';
import { PasswordValidators } from './passwordValidators';

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
                PasswordValidators.minimumFiveCharacters
                ])
            ],
            confirmPassword: ['', Validators.required]
        });
    }

}
