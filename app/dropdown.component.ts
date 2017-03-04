import { Component } from 'angular2/core';

@Component({
    selector: 'bs-dropdown',
    template: `
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle"  type="button" data-toggle="dropdown">
                <ng-content style=".buttonText"></ng-content>
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a></li>
                <li><a href="#">JavaScript</a></li>
            </ul>
        </div>
    `
})

export class BsDropdown {
}

