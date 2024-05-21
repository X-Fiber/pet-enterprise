import type { NCatCatAgg as NSCatCatAgg } from "../../../web-server";

export namespace NCatCatAgg {
  export type Views = "CreateForm" | "CatCounter";

  export type CreateFormProps = {
    className?: string;
  };

  export type CatCounterProps = {
    className?: string;
  };

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

  export type Dictionary = {
    buttons: {
      create: string;
    };
  };

  export type Validator = {
    setPet: NSCatCatAgg.CatStructure;
  };
}
