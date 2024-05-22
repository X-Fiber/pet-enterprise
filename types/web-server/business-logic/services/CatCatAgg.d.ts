export namespace NCatCatAgg {
  export type Routes = "cat";

  export type CatStructure = {
    name: string;
    age: number;
  };

  export type CreateCatAP = {
    body: CatStructure;
    result: {
      catCount: number;
    };
  };

  export type Events = "cat:notification";
  export type CatNotifyPayload = {
    message: string;
  };
}
