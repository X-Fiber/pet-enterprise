import { setRegistry } from "proton";
import { CatCatAggRouter } from "./cat.cat.agg.router";

import { NECat } from "~server-types";

export const CatCatAggRegistry = setRegistry<NECat.Domains>("CatCatAgg", {
  router: CatCatAggRouter,
});