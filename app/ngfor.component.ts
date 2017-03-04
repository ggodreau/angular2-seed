import { Component } from 'angular2/core';
import { SummaryPipe } from './summary.pipe';

@Component({
    selector: 'my-ngFor',
    template: `
        <ul>
            <!--
            <li *ngFor="#myNum of myNums, #i of index">
            {{ i + 1 }}-{{ myNum }}{{ gregVar }}
            </li>
            <li *ngFor="#myNum of myNums, #i = index">{{ myNum }} - {{ i }}, myNums = {{ myNums }},{{ myNums2[i] }}</li>
            -->
            <li>Sup.</li>
        </ul>
        <ul>
            <li>{{ myObj.title }}, {{ myObj.longText | summary:5 }}</li>
        </ul>
        `
    pipes: [SummaryPipe]
})

export class ngForComponent {
    myNums = ['one', 'two', "three", 'four'];
    myObj = {        
            title: 'first element',
            longText: 'I have a long story to tell it is very long yes it is',
            gpioStatus: 'off',
            age: 53
    }
    gregVar = "helloGregVar!"
}

