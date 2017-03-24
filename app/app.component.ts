import {Component} from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { LikeComponent } from './like.component';
import { GregComponent } from './greg.component';
import { CaseComponent } from './caseswitch.component';
import { ngForComponent } from './ngfor.component';
import { BsPanel } from './bspanel.component';
import { BsDropdown } from './dropdown.component';
import { MyZippy } from './zippy.component';
import { MyGippy } from './gippy.component';
import { ContactFormComponent } from './contact-form.component';
import { SubscriptionFormComponent } from './subscription-form.component';
import { SignupFormComponent } from './signup-form.component';
import { ChangePassword } from './change-password.component';
import { ControlGroup, FormBuilder } from 'angular2/common';

form: ControlGroup

@Component({
    selector: 'my-app',
    template: `
        <h1>Heading Section</h1>
        <!--
        <my-ngFor></my-ngFor>
        <case-element></case-element>
        <courses></courses>
        <like></like>
        <greg [isHairy] = 3></greg>
        <greg></greg>
        -->
        <!--
        <bs-panel>
            <div class="heading">This is the heading!</div>
            <div class="panel">This is the panel!</div>
        </bs-panel>
        -->
        <!--<bs-dropdown><div class="buttonText">Hello</div></bs-dropdown>
        <my-zippy>
            <span class="zipText">Hello Zippy!</span>
            <span class="gregText">Hello Greggy 1!</span>
            <span class="gregText2">Hello Greggy 2!</span>
        </my-zippy>
        <my-gippy></my-gippy>
        <contact-form></contact-form>
        <subscription-form></subscription-form>
        <signup-form></signup-form>
        <change-password></change-password>
        -->
    `,
    directives: [
        CoursesComponent,
        LikeComponent,
        GregComponent,
        CaseComponent,
        ngForComponent,
        BsPanel,
        BsDropdown,
        MyZippy,
        MyGippy,
        ContactFormComponent,
        SubscriptionFormComponent,
        SignupFormComponent,
        ChangePassword
    ]
})
export class AppComponent { }
