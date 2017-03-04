System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GetPicService;
    return {
        setters:[],
        execute: function() {
            GetPicService = (function () {
                function GetPicService() {
                }
                GetPicService.prototype.getPic = function () {
                    return ["http://lorempixel.com/100/100/people?1", "http://lorempixel.com/100/100/people?2"];
                };
                GetPicService.prototype.getGreg = function () {
                    return "Hello Greg!";
                };
                return GetPicService;
            }());
            exports_1("GetPicService", GetPicService);
        }
    }
});
//# sourceMappingURL=getpic.service.js.map