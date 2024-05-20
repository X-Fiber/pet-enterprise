import { setSpace } from "~business-logic";
import { BaseForm } from "./Form";

import type { NextUI } from "~client-types";

export const formSpace = setSpace<NextUI.Spaces>("Forms", [BaseForm]);
