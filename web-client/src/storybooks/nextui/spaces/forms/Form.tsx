import { Component, setComponent } from "display";
import React from "react";

import type { NextUI, Storybooks } from "~client-types";

export const BaseForm = setComponent<NextUI.Forms>(
  "BaseForm",
  (props: NextUI.BaseFormProps) => {
    return (
      <>
        {props.inputs.map((input, i) => {
          return (
            <Component<Storybooks, NextUI.Spaces, NextUI.Inputs>
              storybook={"NextUI"}
              space={"Inputs"}
              component={"TextInput"}
              props={{
                register: input.register,
                name: input.name,
              }}
            />
          );
        })}
        <Component<
          Storybooks,
          NextUI.Spaces,
          NextUI.Buttons,
          { type: string; message: string }
        >
          storybook={"NextUI"}
          space={"Buttons"}
          component={"Button"}
          props={{
            type: "submit",
            message: props.button.name,
          }}
        />
      </>
    );
  }
);
