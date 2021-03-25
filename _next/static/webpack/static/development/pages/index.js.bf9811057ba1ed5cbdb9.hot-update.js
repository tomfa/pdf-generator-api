webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "../node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_FileList_FileList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FileList/FileList */ "./components/FileList/FileList.tsx");
/* harmony import */ var _components_FileDrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FileDrop */ "./components/FileDrop.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/AuthProvider */ "./providers/AuthProvider.tsx");
/* harmony import */ var _providers_DataProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/DataProvider */ "./providers/DataProvider.tsx");
var _jsxFileName = "/Users/tomasfagerbekk/repos/pdf-generator/web/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Home() {
  var theme = Object(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  var auth = Object(_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_5__["useAuth"])();

  var _useData = Object(_providers_DataProvider__WEBPACK_IMPORTED_MODULE_6__["useData"])(),
      fetchData = _useData.fetchData,
      templates = _useData.templates,
      files = _useData.files,
      fonts = _useData.fonts,
      uploadTemplates = _useData.uploadTemplates,
      uploadFonts = _useData.uploadFonts;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchData();
  }, [fetchData]);
  return __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "PDF Generator"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "PDF generator ", auth.username), __jsx("div", {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "Templates"), __jsx(_components_FileDrop__WEBPACK_IMPORTED_MODULE_3__["FileDrop"], {
    title: 'Upload new template',
    onDrop: uploadFonts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx(_components_FileList_FileList__WEBPACK_IMPORTED_MODULE_2__["FileList"], {
    files: templates,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  })), __jsx("span", {
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Fonts"), __jsx(_components_FileDrop__WEBPACK_IMPORTED_MODULE_3__["FileDrop"], {
    title: 'Upload new fonts',
    onDrop: uploadTemplates,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), __jsx(_components_FileList_FileList__WEBPACK_IMPORTED_MODULE_2__["FileList"], {
    files: fonts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  })), __jsx("span", {
    className: "card wide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "Create \u2192"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Select a template")), __jsx("span", {
    className: "card wide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "Generated PDFs"), __jsx(_components_FileList_FileList__WEBPACK_IMPORTED_MODULE_2__["FileList"], {
    files: files,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  })))), __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, "\n          h1 {\n            color: ".concat(theme.colors.primary, ";\n          }\n        \n          h2 {\n            padding-bottom: 0.5rem;\n            border-bottom: 1px solid ").concat(theme.colors.primary, ";\n          }\n        \n          .container {\n            min-height: 100vh;\n            padding: 0 0.5rem;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n          }\n\n          main {\n            padding: 5rem 0;\n            flex: 1;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n          }\n\n          footer {\n            width: 100%;\n            height: 100px;\n            border-top: 1px solid #eaeaea;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n          }\n\n          footer img {\n            margin-left: 0.5rem;\n          }\n\n          footer a {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n          }\n\n          a {\n            color: inherit;\n            text-decoration: none;\n          }\n\n          .title a {\n            color: #0070f3;\n            text-decoration: none;\n          }\n\n          .title a:hover,\n          .title a:focus,\n          .title a:active {\n            text-decoration: underline;\n          }\n\n          .title {\n            margin: 0;\n            line-height: 1.15;\n            font-size: 4rem;\n          }\n\n          .title,\n          .description {\n            text-align: center;\n          }\n\n          .description {\n            line-height: 1.5;\n            font-size: 1.5rem;\n          }\n\n          code {\n            background: #fafafa;\n            border-radius: 5px;\n            padding: 0.75rem;\n            font-size: 1.1rem;\n            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,\n              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;\n          }\n\n          .grid {\n            display: flex;\n            align-items: flex-start;\n            justify-content: center;\n            flex-wrap: wrap;\n\n            max-width: 800px;\n            margin-top: 3rem;\n          }\n\n          .card {\n            margin: 1rem;\n            flex-basis: 95%;\n            padding: 1.5rem;\n            text-align: left;\n            color: inherit;\n            text-decoration: none;\n            transition: color 0.15s ease, border-color 0.15s ease;\n          }\n          \n          .card.wide {\n            flex-basis: 95%;\n          }\n\n          .card h3 {\n            margin: 0 0 1rem 0;\n            font-size: 1.5rem;\n          }\n\n          .card p {\n            margin: 0;\n            font-size: 1.25rem;\n            line-height: 1.5;\n          }\n\n          .logo {\n            height: 1em;\n          }\n\n          @media (max-width: 600px) {\n            .grid {\n              width: 100%;\n              flex-direction: column;\n            }\n          }\n        ")));
}

/***/ })

})
//# sourceMappingURL=index.js.bf9811057ba1ed5cbdb9.hot-update.js.map