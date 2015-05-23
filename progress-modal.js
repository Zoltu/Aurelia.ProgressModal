var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};System.register(['bootstrap', 'bootstrap/css/bootstrap.css!', './progress-modal.css!', 'aurelia-framework', 'jquery', 'uuid'], function(exports_1) {
    var aurelia_framework_1, jquery_1, uuid_1;
    var ProgressModal;
    return {
        setters:[
            function (_) {},
            function (_) {},
            function (_) {},
            function (_aurelia_framework_1) {
                aurelia_framework_1 = _aurelia_framework_1;
            },
            function (_jquery_1) {
                jquery_1 = _jquery_1;
            },
            function (_uuid_1) {
                uuid_1 = _uuid_1;
            }],
        execute: function() {
            ProgressModal = (function () {
                function ProgressModal() {
                    this.uuid = uuid_1.default();
                }
                ProgressModal.prototype.bind = function (bindingContext) {
                    if (!this.title)
                        throw new Error("Must provide title to progress-modal!");
                };
                ProgressModal.prototype.show = function (promise) {
                    var _this = this;
                    if (!promise)
                        throw new Error('A promise is required to show the progress modal.');
                    jquery_1.default("#" + this.uuid).modal('show');
                    promise.then(function (_) { return _this.hide(); }, function (_) { return _this.hide(); });
                };
                ProgressModal.prototype.hide = function () {
                    jquery_1.default("#" + this.uuid).modal('hide');
                };
                __decorate([
                    aurelia_framework_1.bindable
                ], ProgressModal.prototype, "title");
                ProgressModal = __decorate([
                    aurelia_framework_1.customElement('progress-modal'),
                    aurelia_framework_1.useView('./progress-modal.html')
                ], ProgressModal);
                return ProgressModal;
            })();
            exports_1("ProgressModal", ProgressModal);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLW1vZGFsLnRzIl0sIm5hbWVzIjpbIlByb2dyZXNzTW9kYWwiLCJQcm9ncmVzc01vZGFsLmNvbnN0cnVjdG9yIiwiUHJvZ3Jlc3NNb2RhbC5iaW5kIiwiUHJvZ3Jlc3NNb2RhbC5zaG93IiwiUHJvZ3Jlc3NNb2RhbC5oaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQUFBO29CQUtXQyxTQUFJQSxHQUFXQSxjQUFJQSxFQUFFQSxDQUFDQTtnQkFrQmpDQSxDQUFDQTtnQkFoQlVELDRCQUFJQSxHQUFkQSxVQUFlQSxjQUFtQkE7b0JBQ2pDRSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTt3QkFDZkEsTUFBTUEsSUFBSUEsS0FBS0EsQ0FBQ0EsdUNBQXVDQSxDQUFDQSxDQUFDQTtnQkFDM0RBLENBQUNBO2dCQUVNRiw0QkFBSUEsR0FBWEEsVUFBWUEsT0FBcUJBO29CQUFqQ0csaUJBTUNBO29CQUxBQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQTt3QkFDWkEsTUFBTUEsSUFBSUEsS0FBS0EsQ0FBQ0EsbURBQW1EQSxDQUFDQSxDQUFDQTtvQkFFdEVBLGdCQUFNQSxDQUFDQSxNQUFJQSxJQUFJQSxDQUFDQSxJQUFNQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtvQkFDdENBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLFVBQUFBLENBQUNBLElBQUlBLE9BQUFBLEtBQUlBLENBQUNBLElBQUlBLEVBQUVBLEVBQVhBLENBQVdBLEVBQUVBLFVBQUFBLENBQUNBLElBQUlBLE9BQUFBLEtBQUlBLENBQUNBLElBQUlBLEVBQUVBLEVBQVhBLENBQVdBLENBQUNBLENBQUNBO2dCQUNsREEsQ0FBQ0E7Z0JBRU1ILDRCQUFJQSxHQUFYQTtvQkFDQ0ksZ0JBQU1BLENBQUNBLE1BQUlBLElBQUlBLENBQUNBLElBQU1BLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUN2Q0EsQ0FBQ0E7Z0JBbkJESjtvQkFBQ0EsNEJBQVFBO21CQUNGQSxnQ0FBS0EsRUFBU0E7Z0JBSnRCQTtvQkFBQ0EsaUNBQWFBLENBQUNBLGdCQUFnQkEsQ0FBQ0E7b0JBQy9CQSwyQkFBT0EsQ0FBQ0EsdUJBQXVCQSxDQUFDQTtrQ0FzQmhDQTtnQkFBREEsb0JBQUNBO1lBQURBLENBdkJBLEFBdUJDQSxJQUFBO1lBdkJELHlDQXVCQyxDQUFBIiwiZmlsZSI6InByb2dyZXNzLW1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==