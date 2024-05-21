import { setComponent } from "~packages";
import { NextUI } from "~client-types";

export const BaseLabel = setComponent<NextUI.Labels, NextUI.BaseLabelProps>(
  "BaseLabel",
  (props) => {
    return <h2 className={props.className}>{props.message}</h2>;
  }
);
