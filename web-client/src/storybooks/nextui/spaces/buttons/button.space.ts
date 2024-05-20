import { setSpace } from "~business-logic";
import { Button } from "./Button";

import type { NextUI } from "~client-types";

export const buttonSpace = setSpace<NextUI.Spaces>("Buttons", [Button]);
