import { Component } from 'angular2/core';
//import { Input } from 'angular2/core';

@Component({
    selector: 'my-zippy',
    styles: [`
        .zippy {
            border: 1px solid #ccc;
        }
        .greggy {
            height: 100px;
            width: 30%;
            border: 2px blue;
            border-style: dashed;
            background-color: lightblue;
        }
        .greggy2 {
            height: 100px;
            width: 30%;
            border: 2px red;
            border-style: dashed;
            background-color: lightblue;
        }

        `]
    template: `
        <span class="zippy">
            <ng-content select=".zipText"></ng-content>
        </span>
        <br>
        <span *ngIf=collapsed class="greggy">
            <ng-content select=".gregText"></ng-content>
        </span>
        <br>
        <span class="greggy2" (click)=onClick()>
            <ng-content select=".gregText2"></ng-content>
        </span>
        <br>
        <div class="greggy">
            New Divider
            <i 
                class="pull-right glyphicon" 
                [ngClass]="
                    { 
                        'glyphicon-chevron-down': !collapsed, 
                        'glyphicon-chevron-up': collapsed 
                    }">
            </i>
            <i 
                class="glyphicon glyphicon-cloud"
                [ngClass]="{
                                'pull-left': !collapsed,
                                'pull-right': collapsed
                            }">
           </i>
        </div>
        `
})

export class MyZippy {
    collapsed = true;

    onClick(){
        console.log("clicked!");
        this.collapsed = !this.collapsed;
        console.log(this.collapsed);
    }
}
