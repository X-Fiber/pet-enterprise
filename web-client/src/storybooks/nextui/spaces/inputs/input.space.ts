import { setSpace } from "~packages";
import { StandardInput } from "./StandardInput";

import type { NextUI } from "~client-types";

export const inputSpace = setSpace<NextUI.Spaces>("Inputs", [StandardInput]);
