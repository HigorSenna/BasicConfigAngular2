"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ModalUtilComponent = (function () {
    function ModalUtilComponent() {
        this.onConfirm = new core_1.EventEmitter();
    }
    ModalUtilComponent.prototype.confirmar = function () {
        this.onConfirm.emit(true); //emite uma notificacao para o componente pai
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ModalUtilComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ModalUtilComponent.prototype, "titulo", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ModalUtilComponent.prototype, "descricao", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ModalUtilComponent.prototype, "onConfirm", void 0);
    ModalUtilComponent = __decorate([
        core_1.Component({
            selector: 'modal-util',
            template: "\n    <div class=\"modal fade\" id=\"{{id}}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fechar\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <h4 class=\"modal-title\" id=\"modalLabel\">{{ titulo }}</h4>\n          </div>\n          <div class=\"modal-body\">\n            {{ descricao }}\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n              N\u00E3o\n            </button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"confirmar()\">\n              Sim\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ModalUtilComponent);
    return ModalUtilComponent;
}());
exports.ModalUtilComponent = ModalUtilComponent;
//# sourceMappingURL=modal-util-component.js.map