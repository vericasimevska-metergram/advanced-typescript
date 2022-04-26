"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskType = void 0;
var TaskType;
(function (TaskType) {
    TaskType["feature"] = "feature";
    TaskType["bug"] = "bug";
})(TaskType = exports.TaskType || (exports.TaskType = {}));
const whatever = { name: "Single Sign On", type: TaskType.feature };
whatever.type = TaskType.bug;
const feature = { name: "Single Sign On", type: TaskType.feature };
// ERRORS
// feature.type = TaskType.bug;
//const invalid: FeatureTask = { name: "Single Sign On", type: TaskType.bug };
