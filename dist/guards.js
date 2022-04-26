"use strict";
const printDeliminated = (doc) => {
    /* ... */
};
const printPlaintext = (doc) => {
    /* ... */
};
const printDocument = (doc) => {
    if ("seperator" in doc) {
        printDeliminated(doc);
    }
    else {
        printPlaintext(doc);
    }
};
