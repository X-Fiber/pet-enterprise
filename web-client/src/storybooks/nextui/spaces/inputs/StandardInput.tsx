import React from "react";
import { setComponent } from "~packages";
import { Input } from "@nextui-org/input";

import type { NextUI } from "~client-types";

export const StandardInput = setComponent<NextUI.Inputs, NextUI.TextInputProps>(
  "TextInput",
  (props) => {
    return (
      <Input
        color={"primary"}
        {...props.register(props.name)}
        placeholder={props.placeholder}
      />
    );
  }
);
