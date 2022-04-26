
type DeliminatedDocument = {
    text: string;
    seperator: "comma" | "tab";
  };
  
  
  type PlaintextDocument = {
    text: string;
  };
  
  const printDeliminated = (doc: DeliminatedDocument) => {
    /* ... */
  };
  
  const printPlaintext = (doc: PlaintextDocument) => {
    /* ... */
  };
  
  const printDocument = (doc: DeliminatedDocument | PlaintextDocument) => {
    if ("seperator" in doc) {
      printDeliminated(doc);
    } else {
      printPlaintext(doc);
    }
  };