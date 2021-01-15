"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash.camelcase"));

var _initLDClient = require("./initLDClient");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(_flags) {
  return {
    data: function data() {
      return {
        flags: {}
      };
    },
    provide: function provide() {
      return {
        ld: this.$data
      };
    },
    mounted: function mounted() {
      var _this = this;

      this.flags = _flags;

      _initLDClient.ldClient.on('change', function (changes) {
        var flattened = {};

        for (var key in changes) {
          flattened[(0, _lodash.default)(key)] = changes[key].current;
        }

        _this.flags = _objectSpread({}, _this.flags, flattened);
      });
    }
  };
};

exports.default = _default;