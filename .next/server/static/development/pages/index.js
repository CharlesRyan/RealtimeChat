module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/messages.json":
/*!******************************!*\
  !*** ./assets/messages.json ***!
  \******************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":[{"user":"Geoff","message":"Hi everybody! I hope you're all doing super well!","timestamp":1543423174120,"sentiment":17},{"user":"Gruff","message":"I'm doing terrible. I'm angry and I resent the assumption of wellbeing.","timestamp":1543423174121,"sentiment":-17},{"user":"Mike","message":"I'm doing just OK.","timestamp":1543423174122,"sentiment":0}]};

/***/ }),

/***/ "./components/Chat.js":
/*!****************************!*\
  !*** ./components/Chat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pusher-js */ "pusher-js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ChatMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatMessage */ "./components/ChatMessage.js");
/* harmony import */ var _assets_messages_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/messages.json */ "./assets/messages.json");
var _assets_messages_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/messages.json */ "./assets/messages.json", 1);
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






var SAD_EMOJI = [55357, 56864];
var HAPPY_EMOJI = [55357, 56832];
var NEUTRAL_EMOJI = [55357, 56848];

var Chat =
/*#__PURE__*/
function (_Component) {
  _inherits(Chat, _Component);

  function Chat(props) {
    var _this;

    _classCallCheck(this, Chat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chat).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      chats: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyUp", function (evt) {
      var value = evt.target.value;

      if (evt.keyCode === 13 && !evt.shiftKey) {
        var user = _this.props.activeUser;
        var chat = {
          user: user,
          message: value,
          timestamp: +new Date()
        };
        evt.target.value = '';
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/message', chat);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filterChats", function (chats) {
      var uniqueChats = [];
      var key = [];
      chats.map(function (chat) {
        if (key[chat.timestamp] != 1) {
          key[chat.timestamp] = 1;
          uniqueChats.push(chat);
        }
      });
      return uniqueChats;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToBottom", function () {
      _this.chatContainer.current.scrollTo({
        top: _this.scrollRef.current.offsetTop,
        behavior: "smooth"
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "makeAFace", function (sentiment) {
      if (sentiment >= 16) {
        // console.log(">= 16");
        return '1f600';
      } else if (sentiment >= 14) {
        // console.log("> 14");
        return '1f60a';
      } else if (sentiment >= 10) {
        // console.log("> 10");
        return '1f642';
      } else if (sentiment >= 5) {
        // console.log("> 5");
        return '1f60f';
      } else if (sentiment == 0) {
        // console.log("== 0");
        return '1f610';
      } else if (sentiment >= -5) {
        // console.log(">= -5");
        return '1f928';
      } else if (sentiment >= -10) {
        // console.log(">= -10");
        return '1f612';
      } else if (sentiment >= -14) {
        // console.log(">= -14");
        return '1f623';
      } else if (sentiment >= -17) {
        // console.log(">= -17");
        return '1f62b';
      }
    });

    _this.state = {
      chats: []
    };
    _this.scrollRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.chatContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(Chat, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_2___default.a("31997d6fdeaa9d6212c9", {
        cluster: "us2",
        encrypted: true
      });
      this.channel = this.pusher.subscribe('chat-room'); // new message event in pusher

      this.channel.bind('new-message', function (_ref) {
        var _ref$chat = _ref.chat,
            chat = _ref$chat === void 0 ? null : _ref$chat;
        console.log(chat);
        var chats = _this2.state.chats;
        chat && chats.push(chat);

        var uniqueChats = _this2.filterChats(_this2.state.chats);

        _this2.setState({
          chats: uniqueChats
        });

        _this2.scrollToBottom();
      }); // fetch messages upon initial connection

      this.pusher.connection.bind('connected', function () {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/messages').then(function (response) {
          var chats = response.data.messages;

          var uniqueChats = _this2.filterChats(chats);

          if (chats.length >= 1) {
            _this2.setState({
              chats: uniqueChats
            });
          } else {
            _this2.setState({
              chats: _assets_messages_json__WEBPACK_IMPORTED_MODULE_4__.data
            });
          }

          _this2.scrollToBottom();
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.pusher.disconnect();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return this.props.activeUser && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "border-bottom border-gray w-100 d-flex align-items-center bg-white",
        style: {
          height: 90
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          cursor: 'pointer'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        onClick: this.props.logOut,
        version: "1.1",
        id: "Capa_1",
        width: "40px",
        height: "40px",
        viewBox: "0 0 477.175 477.175",
        enableBackground: "new 0 0 477.175 477.175;"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225\r c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "text-dark mb-0 mx-4 px-2"
      }, this.props.activeUser)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: this.chatContainer,
        className: "px-4 pb-4 w-100 d-flex flex-row flex-wrap align-items-start align-content-start position-relative",
        style: {
          height: 'calc(100% - 180px)',
          overflowY: 'scroll'
        }
      }, this.state.chats.map(function (chat, index) {
        var previous = Math.max(0, index - 1);
        var previousChat = _this3.state.chats[previous];
        var position = chat.user === _this3.props.activeUser ? "right" : "left";
        var isFirst = previous === index;
        var inSequence = chat.user === previousChat.user;
        var hasDelay = Math.ceil((chat.timestamp - previousChat.timestamp) / (1000 * 60)) > 1; // sentiment # -> emoji
        // const mood = chat.sentiment > 0 ? HAPPY_EMOJI : (chat.sentiment === 0 ? NEUTRAL_EMOJI : SAD_EMOJI);

        var mood = _this3.makeAFace(chat.sentiment);

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "d-block w-100 font-weight-bold text-dark mt-4 pb-1 px-1 text-".concat(position),
          style: {
            fontSize: '0.9rem'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "d-block",
          style: {
            fontSize: '1.6rem'
          }
        }, String.fromCodePoint("0x".concat(mood))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, chat.user || 'Anonymous')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChatMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
          message: chat.message,
          position: position
        }));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          float: "left",
          clear: "both"
        },
        ref: this.scrollRef
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "border-top border-gray w-100 pl-4 pr-2 d-flex align-items-center bg-light",
        style: {
          minHeight: 90
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: "form-control px-3 py-2",
        onKeyUp: this.handleKeyUp,
        placeholder: "Enter a chat message",
        style: {
          resize: 'none'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ml-2",
        viewBox: "0 0 129 129",
        enableBackground: "new 0 0 129 129",
        width: "50px",
        height: "50px"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z",
        fill: "#000000"
      })))));
    }
  }]);

  return Chat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./components/ChatMessage.js":
/*!***********************************!*\
  !*** ./components/ChatMessage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* components/ChatMessage.js */


var ChatMessage =
/*#__PURE__*/
function (_Component) {
  _inherits(ChatMessage, _Component);

  function ChatMessage() {
    _classCallCheck(this, ChatMessage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChatMessage).apply(this, arguments));
  }

  _createClass(ChatMessage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$position = _this$props.position,
          position = _this$props$position === void 0 ? 'left' : _this$props$position,
          message = _this$props.message;
      var isRight = position.toLowerCase() === 'right';
      var align = isRight ? 'text-right' : 'text-left';
      var justify = isRight ? 'justify-content-end' : 'justify-content-start';
      var messageBoxStyles = {
        maxWidth: '70%',
        flexGrow: 0
      };
      var messageStyles = {
        fontWeight: 500,
        lineHeight: 1.4,
        whiteSpace: 'pre-wrap'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w-100 my-1 d-flex ".concat(justify)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-light rounded border border-gray p-2",
        style: messageBoxStyles
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "d-block text-secondary ".concat(align),
        style: messageStyles
      }, message)));
    }
  }]);

  return ChatMessage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ChatMessage);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);



var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, props.pageTitle || 'Realtime Chat')), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
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

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "pusher-js":
/*!****************************!*\
  !*** external "pusher-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map