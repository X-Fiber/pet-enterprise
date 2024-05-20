import { NSCatCatAgg } from "~server-types";

export namespace NCatCatAgg {
  export type Forms = "CreateForm" | "CatInfo";
  export type Routines = "sendCat" | "getCat";

  export type Store = {
    name: string;
    age: number;
    count: number;
  } & {
    setPet: (pet: NSCatCatAgg.CatStructure) => void;
    setCount: (count: number) => void;
  };

  export type Controller = {
    sendCat: (cat: NSCatCatAgg.CatStructure) => Promise<Store["count"]>;
    getCat: (
      name: NSCatCatAgg.CatStructure["name"]
    ) => Promise<NSCatCatAgg.CatStructure>;
  };
}
