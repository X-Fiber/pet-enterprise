import { setSpace } from "~packages";
import { BaseLabel } from "./Label";

import type { NextUI } from "~client-types";

export const labelSpace = setSpace<NextUI.Spaces>("Labels", [BaseLabel]);
