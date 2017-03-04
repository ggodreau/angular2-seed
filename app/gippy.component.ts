import { Component } from 'angular2/core';

@Component({
    selector: 'my-gippy',
    styles: [`
        .shaded {
            border: 1px solid red;
        }
        .opened {
            border: 1px solid blue;
            background-color: lightblue;
        }
        .neutral {
            border: 2px green;
            border-radius: 2px;
        }
    `],
    template: `
        <div class="shaded" (click)=onClick()>
            element header
            <i 
                class="pull-right glyphicon"
                [ngClass]="{
                    'glyphicon-thumbs-up' : !toggleState,
                    'glyphicon-thumbs-down' : toggleState
                }">
            </i>
        </div>
        <div class="opened" *ngIf="toggleState">shaded section</div>
        <div class="neutral">neutral div yo</div>
    `
})

export class MyGippy {
    toggleState = false;

    onClick(){
        this.toggleState = !this.toggleState;
    }

}
