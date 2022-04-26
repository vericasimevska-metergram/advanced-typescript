"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.double = void 0;
function assertIsNumber(val) {
    if (typeof val !== "number") {
        throw new Error("Not a number!");
    }
}
function double(input) {
    assertIsNumber(input);
    return input * 2;
}
exports.double = double;
