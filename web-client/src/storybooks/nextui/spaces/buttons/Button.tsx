import React from "react";
import { setComponent } from "~business-logic";
import { Button as NextUIButton } from "@nextui-org/react";

import type { NextUI } from "~client-types";

export const Button = setComponent<NextUI.Buttons>(
  "Button",
  (props: NextUI.ButtonProps) => {
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
