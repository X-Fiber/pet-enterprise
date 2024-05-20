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

  export type GetCateAP = {
    params: {
      catName: string;
    };
    nf: {
      code: string;
      message: string;
    };
    result: CatStructure;
  };
}
