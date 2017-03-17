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
                    console.log("password too short:", control.value.length);
                    return { passwordTooShort: false };
                };
                PasswordValidators.passwordIs1234 = function (control) {
                    if (control.value != '1234')
                        return { not1234: true };
                    return null;
                };
                PasswordValidators.passwordMatch = function (group) {
                    var control1 = group.find('newPassword').value;
                    var control2 = group.find('confirmPassword').value;
                    console.log("control1,control2: ", control1, control2);
                    if (control1 == control2)
                        return { passwordsDoMatch: true };
                    console.log("passwords match!");
                    return { passwordsDoMatch: false };
                    console.log("no password match!");
                    //        console.log("controls = ",control1, control2);
                };
                return PasswordValidators;
            }());
            exports_1("PasswordValidators", PasswordValidators);
        }
    }
});
//# sourceMappingURL=passwordValidators.js.map