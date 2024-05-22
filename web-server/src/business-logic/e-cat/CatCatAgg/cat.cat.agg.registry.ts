import { setRegistry } from "~packages";
import { CatCatAggRouter } from "./cat.cat.agg.router";
import { CatCatAggEmitter } from "./cat.cat.agg.emitter";

import type { NECat } from "~server-types";

export const CatCatAggRegistry = setRegistry<NECat.Domains>("CatCatAgg", {
  router: CatCatAggRouter,
  emitter: CatCatAggEmitter,
});
