import { setSpace } from "~packages";
import { BaseForm } from "./Form";

import type { NextUI } from "~client-types";

export const formSpace = setSpace<NextUI.Spaces>("Forms", [BaseForm]);
