import { Component, setComponent } from "~packages";
import React from "react";
import styles from "./form.module.scss";
import { Chip } from "~packages";

import type { NextUI, Storybooks } from "~client-types";

export const BaseForm = setComponent<NextUI.Forms>(
  "BaseForm",
  (props: NextUI.BaseFormProps) => {
    return (
      <>
        <div className={styles.section}>
          {props.inputs.map((input, i) => {
            return (
              <Component<Storybooks, NextUI.Spaces, NextUI.Inputs>
                storybook={"NextUI"}
                space={"Inputs"}
                component={"TextInput"}
                props={{
                  register: input.register,
                  name: input.name,
                  placeholder: input.placeholder,
                }}
                key={input + "{{" + i + "}}"}
              />
            );
          })}
          {props.errors?.map((e, i) => {
            return e.message ? (
              <Chip className={styles.text} key={e + "{{" + i + "}}"}>
                {e.message}
              </Chip>
            ) : (
              <div key={e + "{{" + i + "}}"}></div>
            );
          })}
        </div>
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
