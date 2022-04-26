"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.epic = exports.releases = void 0;
var Priority;
(function (Priority) {
    Priority["mustHave"] = "Must Have";
    Priority["shouldHave"] = "Should Have";
    Priority["couldHave"] = "Could Have";
    Priority["wontHave"] = "Won't Have";
})(Priority || (Priority = {}));
const backlog = {
    releases: [
        {
            name: "Sprint 1",
            epics: [
                {
                    name: "Account Management",
                    tasks: [
                        { name: "Single Sign On", priority: Priority.mustHave },
                        { name: "Email Notifications", priority: Priority.mustHave }
                    ]
                }
            ]
        }
    ]
};
exports.releases = {
    name: "Sprint 1",
    epics: [
        {
            name: "Account Management",
            tasks: [
                { name: "Single Sign On", priority: Priority.mustHave },
                { name: "Email Notifications", priority: Priority.mustHave }
            ]
        }
    ]
};
exports.epic = {
    name: "Account Management",
    tasks: [
        { name: "Single Sign On", priority: Priority.mustHave },
        { name: "Email Notifications", priority: Priority.mustHave }
    ]
};
