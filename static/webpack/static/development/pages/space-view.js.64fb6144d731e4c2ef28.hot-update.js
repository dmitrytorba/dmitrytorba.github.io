webpackHotUpdate("static/development/pages/space-view.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


var _jsxFileName = "/home/d/tree_inc/blog/components/nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
  list: {}
});

var Nav = function Nav() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    menuOpen: false
  }),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var toggleDrawer = function toggleDrawer(isOpen) {
    return function (event) {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        menuOpen: isOpen
      }));
    };
  };

  return __jsx("nav", {
    className: "jsx-2637137393",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-2637137393",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-2637137393",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: toggleDrawer(true),
    "aria-label": "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("img", {
    src: "/static/tree_logo.png",
    width: "35",
    height: "35",
    className: "jsx-2637137393",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })))), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: state.menuOpen,
    onClose: toggleDrawer(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    role: "presentation",
    className: "jsx-2637137393" + " " + (classes.list || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["List"], {
    component: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/space-view",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItemText"], {
    primary: "Live space view with CSS",
    secondary: "May 23, 2020",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/static-react",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItemText"], {
    primary: "How to run static React on Github.io with Next.js",
    secondary: "Dec 11, 2019",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2637137393",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=PT+Serif&display=swap');body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}nav{text-align:center;background:white;}ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}nav>ul{margin:0;box-shadow:0 4px 12px 0 rgba(0,0,0,0.05);}@media only screen and (max-width:400px){nav>ul{padding:8px 16px;}}@media only screen and (min-width:401px) and (max-width:960px){nav>ul{padding:8px 32px;}}@media only screen and (min-width:961px){nav>ul{padding:8px 64px;}}li{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;}a{color:#067df7;-webkit-text-decoration:none;text-decoration:none;}body{margin:0;padding:0;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;color:rgba(0,0,0,0.8);position:relative;min-height:100vh;}pre{background:rgba(0,0,0,0.05);padding:20px;overflow-x:auto;}.text-outer{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:15px;}.text-inner{max-width:680px;width:100%;min-width:0;font-family:'PT Serif',Georgia,Cambria,\"Times New Roman\",Times,serif;-webkit-letter-spacing:-0.004em;-moz-letter-spacing:-0.004em;-ms-letter-spacing:-0.004em;letter-spacing:-0.004em;color:rgba(0,0,0,0.84);font-style:normal;font-weight:400;margin-top:2em;margin-bottom:-0.46em;background:white;padding:0 20px;}@media only screen and (max-width:400px){.text-inner{margin:0 24px;line-height:1.4;font-size:18px;}}@media only screen and (min-width:401px) and (max-width:960px){.text-inner{margin:0 48px;line-height:1.4;font-size:18px;}}@media only screen and (min-width:961px){.text-inner{margin:0;line-height:1.6;font-size:21px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2QvdHJlZV9pbmMvYmxvZy9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRXlCLEFBR29CLEFBS1MsQUFJTCxBQUlKLEFBTVksQUFPQSxBQU9BLEFBSVIsQUFJQyxBQUc0RCxBQUU3RCxBQVNzQixBQUtSLEFBS1AsQUFpQkUsQUFRQSxBQVFMLFNBaEdNLEFBWXFCLEFBaUM5QixBQW9EVSxLQXpESCxBQXlDRyxBQVFBLEVBekJULENBOUNiLEFBT0EsQUFPQSxDQTVCZSxDQTBDcUIsTUFvRGYsRUFqQ1AsQ0FYQyxFQTRCTSxBQVFBLEtBckZ6QixJQTZEZ0YsQ0FpQzFFLENBNUNnQixJQTRCaEIsQUFRQSxLQTlFTixHQWtDeUMsSUFTdkMsT0FmRixVQWpDZ0MsQUE0QmQsY0FZVSxFQVg1QixLQXBDQSxJQTBEbUIsU0FRVyxFQWxCTixrQkFDRCxpQkFDckIsNEJBU29CLGdCQW5EdEIsQUFvREUsZ0NBTzhCLHVCQUNSLGtCQUNGLGdCQUNELGVBQ08sc0JBQ0wsaUJBQ0YsZUFFbkIiLCJmaWxlIjoiL2hvbWUvZC90cmVlX2luYy9ibG9nL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCB7IExpc3QsIExpc3RJdGVtLCBMaXN0SXRlbVRleHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBsaXN0OiB7XG4gIH1cbn0pO1xuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgbWVudU9wZW46ZmFsc2VcbiAgfSk7XG5cbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKGlzT3BlbikgPT4gZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicgJiYgKGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5ID09PSAnU2hpZnQnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIG1lbnVPcGVuOiBpc09wZW4gfSk7XG4gIH07XG4gIFxuICByZXR1cm4gKFxuICAgIDxuYXY+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcih0cnVlKX0gYXJpYS1sYWJlbD1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvdHJlZV9sb2dvLnBuZycgd2lkdGg9JzM1JyBoZWlnaHQ9JzM1Jz48L2ltZz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8RHJhd2VyIG9wZW49e3N0YXRlLm1lbnVPcGVufSBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoZmFsc2UpfT5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH1cbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cIm5hdlwiPlxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3NwYWNlLXZpZXcnPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PVwiTGl2ZSBzcGFjZSB2aWV3IHdpdGggQ1NTXCJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT1cIk1heSAyMywgMjAyMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9zdGF0aWMtcmVhY3QnPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PVwiSG93IHRvIHJ1biBzdGF0aWMgUmVhY3Qgb24gR2l0aHViLmlvIHdpdGggTmV4dC5qc1wiXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnk9XCJEZWMgMTEsIDIwMTlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRHJhd2VyPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgQXZlbmlyIE5leHQsIEF2ZW5pcixcbiAgICAgICAgICAgIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgICBuYXYge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICB1bCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgICAgbmF2ID4gdWwge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgICAgfVxuICAgICAgICAgIC8qIE1vYmlsZSBTdHlsZXMgKi9cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgICAgICAgbmF2ID4gdWwge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBUYWJsZXQgU3R5bGVzICovXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDFweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgICAgICAgbmF2ID4gdWwge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMzJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBEZXNrdG9wIFN0eWxlcyAqL1xuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYxcHgpIHtcbiAgICAgICAgICBuYXYgPiB1bCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweCA2NHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZzogNnB4IDhweDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1QVCtTZXJpZiZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJlIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHQtb3V0ZXIge1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHQtaW5uZXIge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDY4MHB4OyAgIFxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1BUIFNlcmlmJywgR2VvcmdpYSwgQ2FtYnJpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDA0ZW07XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTAuNDZlbTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcblxuICAgICAgICAgIH1cbiAgICAgICAgICAvKiBNb2JpbGUgKi9cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgICAgICAgICAgIC50ZXh0LWlubmVyIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyNHB4O1xuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIC8qIFRhYmxldCAqL1xuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAxcHgpIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgICAgICAgICAgICAudGV4dC1pbm5lciB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNDhweDtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLyogRGVza3RvcCAqL1xuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYxcHgpIHtcbiAgICAgICAgICAudGV4dC1pbm5lciB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS42OyAgXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9uYXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuIl19 */\n/*@ sourceURL=/home/d/tree_inc/blog/components/nav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=space-view.js.64fb6144d731e4c2ef28.hot-update.js.map