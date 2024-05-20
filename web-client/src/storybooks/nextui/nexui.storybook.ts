import { setStorybook } from "~business-logic";
import { buttonSpace, inputSpace, formSpace } from "./spaces";

import type { Storybooks } from "~client-types";

export const NextUiStorybook = setStorybook<Storybooks>("NextUI", [
  buttonSpace,
  inputSpace,
  formSpace,
]);
