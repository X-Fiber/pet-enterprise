"use client";

import React from "react";
import { Component, setView } from "~business-logic";
import { NextUI, NCatCatAgg, Storybooks } from "~types";
import styles from "./create-form.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { NCatCatAgg } from "~server-types";

export type CreateFormProps = {
  className?: string;
};

export const createForm = setView<NCatCatAgg.Forms, "public", CreateFormProps>(
  "CreateForm",
  (agents, context, props) => {
    const { getStore, getController } = agents.schemaAgent;
    const { register, handleSubmit } = useForm<NCatCatAgg.CatStructure>();
    const store = getStore<string, string, NCatCatAgg.Store>(
      "E-Cat",
      "CatCatAgg"
    )();

    const onSubmit: SubmitHandler<NCatCatAgg.CatStructure> = async (data) => {
      try {
        const cat = await getController<NCatCatAgg.Controller>(
          "E-Cat",
          "CatCatAgg",
          "sendCat"
        ).sendCat(data);

        store.setCount(cat);
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <section className={styles.section}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Component<Storybooks, NextUI.Spaces, NextUI.Forms, NextUI.FormProps>
            storybook={"NextUI"}
            space={"Forms"}
            component={"BaseForm"}
            props={{
              inputs: [
                {
                  register: register,
                  name: "name",
                },
                {
                  register: register,
                  name: "age",
                },
              ],
              button: {
                name: "Create",
              },
            }}
          />
          <div>{store.count}</div>
        </form>
      </section>
    );
  }
);
