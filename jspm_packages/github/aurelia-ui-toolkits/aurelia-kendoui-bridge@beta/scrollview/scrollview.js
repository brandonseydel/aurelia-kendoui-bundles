/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Scrollview = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Scrollview = exports.Scrollview = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'scrollview'), _dec2 = (0, _decorators.generateBindables)('kendoMobileScrollView'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaTemplating.ViewResources), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Scrollview(element, widgetBase, viewResources) {
      _classCallCheck(this, Scrollview);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoMobileScrollView').linkViewModel(this).useViewResources(viewResources).useValueBinding();
    }

    Scrollview.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Scrollview.prototype.attached = function attached() {
      if (isInitFromDiv(this.element)) {
        this.target = this.element.querySelectorAll('div')[0];
      } else {
        this.target = document.createElement('div');
        this.element.appendChild(this.target);
      }

      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Scrollview.prototype.recreate = function recreate() {
      var templates = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'template');
      this.widgetBase.useTemplates(this, 'kendoMobileScrollView', templates);

      this.kWidget = this.widgetBase.createWidget({
        element: this.target,
        rootElement: this.element,
        parentCtx: this.$parent
      });
    };

    Scrollview.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    return Scrollview;
  }()) || _class) || _class) || _class);


  function isInitFromDiv(element) {
    return element.querySelectorAll('div').length > 0;
  }
});