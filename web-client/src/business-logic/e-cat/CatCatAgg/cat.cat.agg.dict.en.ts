import { setDictionary } from "~packages";

import type { LanguageKind, NCatCatAgg } from "~client-types";

export const CatCatAggDictEn = setDictionary<
  LanguageKind,
  NCatCatAgg.Dictionary
>(["en", "en-US"], {
  buttons: {
    create: "Create",
  },
});
