import { setStore } from "~packages";

import type { NCatCatAgg } from "~client-types";
import type { NCatCatAgg as NSCatCatAgg } from "~server-types";

export const CatCatAggStore = setStore<NCatCatAgg.Store>({
  storage: "localStorage",
  persistence: "persist",
  skipHydration: true,
  version: 1,
  actions: (setState) => {
    return {
      name: "1",
      age: 0,
      count: 0,
      setPet: (pet: NSCatCatAgg.CatStructure) => {
        return setState(() => {
          return {
            name: pet.name,
            age: pet.age,
          };
        });
      },
      setCount: (count: number) => {
        return setState(() => {
          return {
            count: count,
          };
        });
      },
    };
  },
});
