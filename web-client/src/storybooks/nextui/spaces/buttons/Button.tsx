import React from "react";
import { Button as NextUIButton, setComponent } from "~packages";

import type { NextUI } from "~client-types";

export const Button = setComponent<NextUI.Buttons, NextUI.ButtonProps>(
  "Button",
  (props) => {
    return (
      <NextUIButton
        color={"primary"}
        variant={"shadow"}
        type={props.type ?? undefined}
      >
        {props.message}
      </NextUIButton>
    );
  }
);
