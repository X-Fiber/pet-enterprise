import { setService } from "~packages";
import { CatCatAggRegistry } from "./CatCatAgg";

import type { Services } from "~client-types";

export const eCat = setService<Services>("E-Cat", [CatCatAggRegistry]);
