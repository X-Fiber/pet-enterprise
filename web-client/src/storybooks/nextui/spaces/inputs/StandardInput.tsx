import React from "react";
import { setComponent } from "display";
import { Input } from "@nextui-org/input";

import type { NextUI } from "~client-types";

export const StandardInput = setComponent<NextUI.Inputs>(
  "TextInput",
  (props: NextUI.TextInputProps) => {
    return <Input color={"primary"} {...props.register(props.name)}></Input>;
  }
);
