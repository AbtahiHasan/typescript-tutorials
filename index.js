var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var numArr1 = [1, 2, 3, 4, 5];
var numArr2 = [6, 7, 8, 9, 10];
var newArr = __spreadArray(__spreadArray([], numArr1, true), numArr2, true);
// console.log(newArr);
var func = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    console.log(numbers);
};
func(1, 2, 3);
