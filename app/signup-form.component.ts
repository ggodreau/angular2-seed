import { Component } from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html',
    styles:
        [`
        .gregStyle {
            border: 1px solid red;
        }
        `],
        directives: ['ControlGroup', 'Control']
})

export class SignupFormComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
// zomg commit test!
//    form = new ControlGroup({
//        username: new Control('', Validators.required),
//        password: new Control('', Validators.required)
//    });

    signup(){
        console.log(this.form.value);
    }
}

