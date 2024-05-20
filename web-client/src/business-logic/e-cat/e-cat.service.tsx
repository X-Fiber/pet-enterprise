import { setService } from "display";
import { CatCatAggRegistry } from "./CatCatAgg";

import type { Services } from "~client-types";

export const eCat = setService<Services>("E-Cat", [CatCatAggRegistry]);
