type Diesel = {
    type: "petroleum" | "bio" | "synthetic";
  };
  
  type Gasoline = {
    type: "hybrid" | "conventional";
  };
  
  type Bus = {
    engine: Diesel;
  };
  
  type Car = {
    engine: Gasoline;
  };
  //if it has the engine field then return the engine otherwise return never
  type Engine<T> = T extends { engine: unknown } ? T["engine"] : never;
  
  type BusEngine = Engine<Bus>;
  
  const busEngine: BusEngine = {
    type: "bio"
  };
  
  const carEngine: Engine<Car> = {
    type: "hybrid"
  };
  
// this wont work
//   const invalid: Engine<Car> = {
//     type: "bio"
//   };
  
  type Bicycle = {
    power: "limbs";
  };
  
  type NoEngine = Engine<Bicycle>;
//error
 //const noEngine: NoEngine = { type: "limbs" };
  