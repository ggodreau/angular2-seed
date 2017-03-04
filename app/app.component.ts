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
        <bs-panel>
            <div class="heading">This is the heading!</div>
            <div class="panel">This is the panel!</div>
        </bs-panel>
        <!--<bs-dropdown><div class="buttonText">Hello</div></bs-dropdown>
        <my-zippy>
            <span class="zipText">Hello Zippy!</span>
            <span class="gregText">Hello Greggy 1!</span>
            <span class="gregText2">Hello Greggy 2!</span>
        </my-zippy>
        -->
        <my-gippy></my-gippy>
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
        MyGippy
    ]
})
export class AppComponent { }
