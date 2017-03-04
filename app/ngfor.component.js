System.register(['angular2/core', './summary.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, summary_pipe_1;
    var ngForComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            }],
        execute: function() {
            ngForComponent = (function () {
                function ngForComponent() {
                    this.myNums = ['one', 'two', "three", 'four'];
                    this.myObj = {
                        title: 'first element',
                        longText: 'I have a long story to tell it is very long yes it is',
                        gpioStatus: 'off',
                        age: 53
                    };
                    this.gregVar = "helloGregVar!";
                }
                ngForComponent = __decorate([
                    core_1.Component({
                        selector: 'my-ngFor',
                        template: "\n        <ul>\n            <!--\n            <li *ngFor=\"#myNum of myNums, #i of index\">\n            {{ i + 1 }}-{{ myNum }}{{ gregVar }}\n            </li>\n            <li *ngFor=\"#myNum of myNums, #i = index\">{{ myNum }} - {{ i }}, myNums = {{ myNums }},{{ myNums2[i] }}</li>\n            -->\n            <li>Sup.</li>\n        </ul>\n        <ul>\n            <li>{{ myObj.title }}, {{ myObj.longText | summary:5 }}</li>\n        </ul>\n        ",
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ngForComponent);
                return ngForComponent;
            }());
            exports_1("ngForComponent", ngForComponent);
        }
    }
});
//# sourceMappingURL=ngfor.component.js.map