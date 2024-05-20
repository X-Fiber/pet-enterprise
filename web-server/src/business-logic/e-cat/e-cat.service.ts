import { setService } from "proton";
import { CatCatAggRegistry } from "./CatCatAgg/cat.cat.agg.registry";

import type { Services } from "~server-types";

export const ECatService = setService<Services>("E-Cat", [CatCatAggRegistry]);
