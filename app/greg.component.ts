
import { Component, Input } from 'angular2/core';
import { getPic } from './getPic';

@Component({
    selector: 'greg',
    template: `
    <div class="media">
        <div class="media-left">
            <a href="#">
                <img class="media-object" src="http://lorempixel.com/100/100/people?1" alt="buttheads">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">Angular JS News</h4>
            <ul>
                <li>list1</li>
                <li>list2</li>
            </ul>
            Media Body Here<br>
            <i class="glyphicon glyphicon-heart"></i>
        </div>
    </div>
    `
    styles: [`
        .glyphicon-heart {
            color: deeppink;
        }
    `]
})

export class GregComponent {
    @Input() totalLikes = 0;
    @Input() iLike = false;
    @Input() myClass = "glyphicon-arrow-right"

    onClick(){
        this.myClass = 'glyphicon-arrow-left';
        this.iLike = !this.iLike;
        this.totalLikes = this.iLike ? 1 : 0;
    }
}
