webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Emoji.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
false,

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/core-js/library/fn/object/keys.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
false,

/***/ "./node_modules/emoji-mart/data/all.json":
false,

/***/ "./node_modules/emoji-mart/dist-es/components/anchors.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/components/category.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/components/emoji/emoji.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/components/not-found.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/components/picker/nimble-picker.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/components/picker/picker.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/components/preview.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/components/search.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/components/skins-dot.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/components/skins-emoji.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/components/skins.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/index.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/polyfills/createClass.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/polyfills/extends.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/polyfills/inherits.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/polyfills/objectGetPrototypeOf.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/polyfills/possibleConstructorReturn.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/polyfills/stringFromCodePoint.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/svgs/index.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/utils/data.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/utils/emoji-index/emoji-index.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/utils/emoji-index/nimble-emoji-index.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/utils/frequently.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/utils/index.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/utils/shared-props.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/utils/store.js":
false,

/***/ "./node_modules/emoji-mart/dist-es/vendor/raf-polyfill.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Chat */ "./components/Chat.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import Emoji from '../components/Emoji';
// import { Transition } from 'react-transition-group';

var IndexPage =
/*#__PURE__*/
function (_Component) {
  _inherits(IndexPage, _Component);

  function IndexPage(props) {
    var _this;

    _classCallCheck(this, IndexPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndexPage).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "duration", 1000);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "defaultStyle", {
      transition: "opacity ".concat(_this.duration, "ms ease-in-out"),
      opacity: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "transitionStyles", {
      entering: {
        opacity: 0
      },
      entered: {
        opacity: 1
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyUp", function (evt) {
      if (evt.keyCode === 13) {
        // const user =  evt.target.value;
        // this.setState({ user, open: true });
        _this.logIn();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "flashInput", function () {
      var input = _this.inputRef.current;
      input.style.background = 'rgba(255,0,0,0.2)';
      setTimeout(function () {
        input.style.background = 'none';
      }, 100);
      setTimeout(function () {
        input.style.background = 'rgba(255,0,0,0.2)';
      }, 200);
      setTimeout(function () {
        input.style.background = 'none';
      }, 300);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "logIn", function () {
      if (_this.state.value) {
        _this.setState({
          user: _this.state.value,
          showChat: true,
          value: ""
        });
      } else {
        _this.flashInput();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "logOut", function () {
      _this.setState({
        user: null,
        showChat: false
      });
    });

    _this.state = {
      user: null,
      value: '',
      showChat: false,
      entered: false // this.state = { user: 'user', value: '' }

    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleKeyUp = _this.handleKeyUp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.logOut = _this.logOut.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.inputRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  } // transition settings


  _createClass(IndexPage, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var user = this.state.user;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        pageTitle: "Realtime Chat"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "container-fluid position-absolute h-100 bg-dark"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row position-absolute w-100 h-100"
      }, !user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "col-md-8 col-sm-10 d-flex flex-row flex-wrap align-items-center align-content-center px-sm-5 px-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mx-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "d-block w-100 h1 text-light",
        style: {
          marginTop: -50
        }
      }, user ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          color: '#999'
        }
      }, "Hello!"), " ", user) : "What is your name?"), !user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex align-items-end"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        ref: this.inputRef,
        value: this.state.value,
        onChange: this.handleChange,
        className: "form-control mt-3 px-3 py-2",
        onKeyUp: this.handleKeyUp,
        autoComplete: "off",
        style: {
          background: 'transparent',
          color: '#999',
          border: 0,
          borderBottom: '1px solid #666',
          borderRadius: 0,
          fontSize: '3rem',
          fontWeight: 500,
          boxShadow: 'none !important'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        style: {
          cursor: 'pointer'
        },
        onClick: this.logIn,
        className: "ml-2 ml-sm-3 mb-2 mb-sm-3",
        viewBox: "0 0 129 129",
        enableBackground: "new 0 0 129 129",
        width: "50px",
        height: "50px"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z",
        fill: "#FFFFFF"
      })))))), user && // <Transition
      // in={this.state.showChat}
      // timeout={this.duration}
      // unmountOnExit
      // style={{
      //   ...this.defaultStyle,
      //   ...this.transitionStyles[this.state]}}
      // > 
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w-100 d-flex justify-content-end"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Chat__WEBPACK_IMPORTED_MODULE_2__["default"], {
        activeUser: user,
        logOut: this.logOut
      }))) // </Transition>
      )));
    }
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndexPage, null);
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.5d88ef160ef2fa73a9a4.hot-update.js.map