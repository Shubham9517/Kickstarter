"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Campaign = require("./build/Campaign.json");

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbiIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYyxBQUVyQjs7Ozs7O0FBTEE7O2tCQUtlLFVBQUEsQUFBQyxTQUFZLEFBQzFCO1NBQU8sSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQVMsS0FBQSxBQUFLLE1BQU0sbUJBQWpDLEFBQXNCLEFBQW9CLFlBQWpELEFBQU8sQUFBc0QsQUFDOUQ7QUFGRCIsImZpbGUiOiJjYW1wYWlnbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS91YnVudHUvdWRlbXlfY291cnNlL0V0aGVyZXVtX2FuZF9Tb2xpZGl0eS9raWNrc3RhcnQifQ==