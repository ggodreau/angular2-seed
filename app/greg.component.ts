
import { Component, Input } from 'angular2/core';
import { GetPicService } from './getpic.service';

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
                <li>{{ isHairy }}</li>
                <li>{{ greg }}</li>
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
    `],
    providers: [GetPicService]
})

export class GregComponent {
    @Input() isHairy = ["yesHeIsnt"];
    @Input() totalLikes = 0;
    @Input() iLike = false;
    @Input() myClass = "glyphicon-arrow-right";
    greg = 'foo';
    pics = []


    constructor(getPicService : GetPicService){
        this.pics = getPicService.getPic();
        this.greg = getPicService.getGreg();
//        this.gregWorld = this.getPicService.getGreg();
    }

    onClick(){
        this.myClass = 'glyphicon-arrow-left';
        this.iLike = !this.iLike;
        this.totalLikes = this.iLike ? 1 : 0;
    }
}
