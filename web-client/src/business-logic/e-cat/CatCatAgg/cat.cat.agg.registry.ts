import { setRegistry } from "~packages";

import { CatCatAggController } from "./cat.cat.agg.controller";
import { CatCatAggStore } from "./cat.cat.agg.store";
import { CatCatAggValidator } from "./cat.cat.agg.validator";
import { CatCatAggDictEn } from "./cat.cat.agg.dict.en";
import { CatCatAggCreateForm, CatCatAggCounterView } from "./views";

import type { NECat } from "~client-types";

export const CatCatAggRegistry = setRegistry<NECat.Domains>("CatCatAgg", {
  controller: CatCatAggController,
  store: CatCatAggStore,
  validator: CatCatAggValidator,
  dictionary: CatCatAggDictEn,
  views: [CatCatAggCreateForm, CatCatAggCounterView],
});
