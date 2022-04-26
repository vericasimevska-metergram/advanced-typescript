"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDraftInvoice = exports.isFinalInvoice = void 0;
const isFinalInvoice = (invoice) => {
    return invoice.__typename === "FinalInvoice";
};
exports.isFinalInvoice = isFinalInvoice;
const isDraftInvoice = (invoice) => {
    return invoice.__typename === "DraftInvoice";
};
exports.isDraftInvoice = isDraftInvoice;
const invoice = {
    __typename: "DraftInvoice",
    insertedAt: "2021-05-01",
    lineItems: []
};
const invoice2 = {
    __typename: "FinalInvoice",
    insertedAt: "2022-04-20",
    invoiceNumber: "2",
};
console.log((0, exports.isFinalInvoice)(invoice2));
