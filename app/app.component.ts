import {Component} from 'angular2/core';
import { CoursesComponent } from './courses.component'
import { LikeComponent } from './like.component'
import { GregComponent } from './greg.component'

@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular!</h1><courses></courses><like></like><greg></greg>',
    directives: [CoursesComponent, LikeComponent, GregComponent]
})
export class AppComponent { }
