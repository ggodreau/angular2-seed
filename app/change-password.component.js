System.register(['angular2/core', 'angular2/common', './passwordValidators'], function(exports_1, context_1) {
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
    var core_1, common_1, passwordValidators_1;
    var ChangePassword;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (passwordValidators_1_1) {
                passwordValidators_1 = passwordValidators_1_1;
            }],
        execute: function() {
            // note do not add directives to component; needs explanation
            ChangePassword = (function () {
                function ChangePassword(fb) {
                    this.form = fb.group({
                        currentPassword: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                passwordValidators_1.PasswordValidators.passwordIs1234
                            ])
                        ],
                        newPassword: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                passwordValidators_1.PasswordValidators.minimumFiveCharacters
                            ])
                        ],
                        confirmPassword: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                            ])
                        ]
                    }, { validator: passwordValidators_1.PasswordValidators.passwordMatch });
                    //        console.log("this form value = ",this.form.controls.currentPassword.value);
                    //        console.log("this form = ",this.form);
                }
                ChangePassword.prototype.changePassword = function () {
                    console.log("passwords match? ", this.form.errors.passwordsDoMatch);
                    console.log("this.form = ", this.form);
                    //        console.log("form.errors: ",this.form.errors);
                    //        console.log("form: ",this.form);
                };
                ChangePassword = __decorate([
                    core_1.Component({
                        selector: 'change-password',
                        templateUrl: 'app/change-password.component.html',
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], ChangePassword);
                return ChangePassword;
            }());
            exports_1("ChangePassword", ChangePassword);
        }
    }
});
//# sourceMappingURL=change-password.component.js.map