import { setValidator } from "~packages";

import type { NCatCatAgg } from "~client-types";
import type { NCatCatAgg as NSCatCatAgg } from "~server-types";

export const CatCatAggValidator = setValidator<NCatCatAgg.Validator>({
  setPet: (provider, localization) => {
    return provider.object<NSCatCatAgg.CatStructure>({
      name: provider.string().min(3).max(50).required(),
      age: provider.number().min(0).max(50).required(),
    });
  },
});
