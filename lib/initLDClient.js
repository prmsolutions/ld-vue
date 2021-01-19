"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.initLDClient = exports.ldClient = void 0;

var _lodash = _interopRequireDefault(require("lodash.camelcase"));

var _ldclientJs = require("ldclient-js");

var _initUser = _interopRequireDefault(require("./initUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ldClient;
exports.ldClient = ldClient;

var initLDClient =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var clientSideId, _ref$user, user, options;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            clientSideId = _ref.clientSideId, _ref$user = _ref.user, user = _ref$user === void 0 ? (0, _initUser.default)() : _ref$user, options = _ref.options;
            exports.ldClient = ldClient = (0, _ldclientJs.initialize)(clientSideId, user, options);
            _context.next = 4;
            return new Promise(function (resolve) {
              return ldClient.on('ready', function () {
                var rawFlags = ldClient.allFlags();
                var flags = {};

                for (var rawFlag in rawFlags) {
                  var camelCasedKey = (0, _lodash.default)(rawFlag);
                  flags[camelCasedKey] = rawFlags[rawFlag];
                }

                resolve(flags);
              });
            });

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function initLDClient(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.initLDClient = initLDClient;
var _default = initLDClient;
exports.default = _default;