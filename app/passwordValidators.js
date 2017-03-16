System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidators;
    return {
        setters:[],
        execute: function() {
            PasswordValidators = (function () {
                function PasswordValidators() {
                }
                PasswordValidators.minimumFiveCharacters = function (control) {
                    if (control.value.length < 5)
                        return { passwordTooShort: true };
                    //            console.log("password too short:", control.value.length);
                    return { passwordTooShort: false };
                };
                PasswordValidators.passwordMatch = function (group) {
                    //        var control1 = group.find(‘newPassword’);
                    //        var control2 = group.find(‘confirmPassword’);
                    //        console.log("controls = ",control1, control2);
                    console.log("password control group =", group);
                };
                return PasswordValidators;
            }());
            exports_1("PasswordValidators", PasswordValidators);
        }
    }
});
//# sourceMappingURL=passwordValidators.js.map