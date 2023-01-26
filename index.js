"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./multiRangeSlider.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MultiRangeSlider = function MultiRangeSlider(_ref) {
  var min = _ref.min,
    max = _ref.max,
    leftValue = _ref.leftValue,
    rightValue = _ref.rightValue,
    currency = _ref.currency,
    onChange = _ref.onChange,
    _ref$containerStyle = _ref.containerStyle,
    containerStyle = _ref$containerStyle === void 0 ? {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: "14px",
      paddingTop: "14px",
      width: "350px"
    } : _ref$containerStyle,
    _ref$rangeStyle = _ref.rangeStyle,
    rangeStyle = _ref$rangeStyle === void 0 ? {
      backgroundColor: "#0d6efd"
    } : _ref$rangeStyle,
    _ref$valuesStyle = _ref.valuesStyle,
    valuesStyle = _ref$valuesStyle === void 0 ? {
      color: "#0d6efd",
      fontSize: "12px"
    } : _ref$valuesStyle;
  var _useState = (0, _react.useState)(min),
    _useState2 = _slicedToArray(_useState, 2),
    minVal = _useState2[0],
    setMinVal = _useState2[1];
  var _useState3 = (0, _react.useState)(max),
    _useState4 = _slicedToArray(_useState3, 2),
    maxVal = _useState4[0],
    setMaxVal = _useState4[1];
  var minValRef = (0, _react.useRef)(null);
  var maxValRef = (0, _react.useRef)(null);
  var range = (0, _react.useRef)(null);
  var getPercent = (0, _react.useCallback)(function (value) {
    return Math.round((value - min) / (max - min) * 100);
  }, [min, max]);
  (0, _react.useEffect)(function () {
    if (maxValRef.current) {
      var minPercent = getPercent(minVal);
      var maxPercent = getPercent(+maxValRef.current.value);
      if (range.current) {
        range.current.style.left = "".concat(minPercent, "%");
        range.current.style.width = "".concat(maxPercent - minPercent, "%");
      }
    }
  }, [minVal, getPercent]);
  (0, _react.useEffect)(function () {
    if (minValRef.current) {
      var minPercent = getPercent(+minValRef.current.value);
      var maxPercent = getPercent(maxVal);
      if (range.current) {
        range.current.style.width = "".concat(maxPercent - minPercent, "%");
      }
    }
  }, [maxVal, getPercent]);
  (0, _react.useEffect)(function () {
    onChange({
      min: minVal,
      max: maxVal
    });
  }, [minVal, maxVal, onChange]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: containerStyle
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "range",
    min: min,
    max: max,
    value: minVal,
    ref: minValRef,
    onChange: function onChange(event) {
      var value = Math.min(+event.target.value, maxVal - 1);
      setMinVal(value);
      event.target.value = value.toString();
    },
    className: (0, _classnames["default"])("thumb-range thumb--zindex-3", {
      "thumb--zindex-5": minVal > max - 100
    })
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "range",
    min: min,
    max: max,
    value: maxVal,
    ref: maxValRef,
    onChange: function onChange(event) {
      var value = Math.max(+event.target.value, minVal + 1);
      setMaxVal(value);
      event.target.value = value.toString();
    },
    className: "thumb-range thumb--zindex-4"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider__track"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    ref: range,
    className: "slider__range",
    style: rangeStyle
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider__left-value",
    style: valuesStyle
  }, leftValue + " " + currency), /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider__right-value",
    style: valuesStyle
  }, rightValue + " " + currency)));
};
MultiRangeSlider.propTypes = {
  min: _propTypes["default"].number.isRequired,
  max: _propTypes["default"].number.isRequired,
  onChange: _propTypes["default"].func.isRequired
};
var _default = MultiRangeSlider;
exports["default"] = _default;
