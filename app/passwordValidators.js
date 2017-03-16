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
                PasswordValidators.passwordMatch = function (control) {
                    console.log("password control =", control);
                };
                return PasswordValidators;
            }());
            exports_1("PasswordValidators", PasswordValidators);
        }
    }
});
//# sourceMappingURL=passwordValidators.js.map