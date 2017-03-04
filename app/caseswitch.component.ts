import { Component } from 'angular2/core';

@Component({
    selector: 'case-element',
    template: `
        <h1>caseswitch header</h1>
        <ul class="nav nav-pills">
            <li [class.active]="viewMode == 'map'"><a (click)="viewMode = 'map'">Map View</a></li>
            <li [class.active]="viewMode == 'icon'"><a (click)="viewMode = 'icon'">Icon View</a></li>
        </ul>
        <div [ngSwitch]="viewMode">
            <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map View Content</template>
            <template [ngSwitchWhen]="'icon'">Icon View Content</template>
        </div>
        `
})

export class CaseComponent {
    viewMode = 'map';

    onClick($event){
        console.log("clicked!", $event);
    }
}
