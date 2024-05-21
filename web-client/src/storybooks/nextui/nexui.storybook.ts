import { setStorybook } from "~packages";
import { buttonSpace, inputSpace, formSpace, labelSpace } from "./spaces";

import type { Storybooks } from "~client-types";

export const NextUiStorybook = setStorybook<Storybooks>("NextUI", [
  buttonSpace,
  inputSpace,
  formSpace,
  labelSpace,
]);
