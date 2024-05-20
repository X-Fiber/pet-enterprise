import { setRegistry } from "~business-logic";

import { createForm, catInfo } from "./views";
import { controller } from "./cat.cat.agg.controller";
import { store } from "./cat.cat.agg.store";

import type { NECat } from "~client-types";

export const CatCatAggRegistry = setRegistry<NECat.Domains>("CatCatAgg", {
  controller: controller,
  store: store,
  views: [createForm, catInfo],
});
