"use client";

import React from "react";
import { Component, setView, View } from "~packages";
import { joiResolver, useForm } from "~packages";
import styles from "./create-form.module.scss";

import type { SubmitHandler } from "react-hook-form";
import type { NCatCatAgg as NSCatCatAgg } from "~server-types";
import type {
  NCatCatAgg,
  NECat,
  NextUI,
  Services,
  Storybooks,
} from "~client-types";

export const CatCatAggCreateForm = setView<
  NCatCatAgg.Views,
  "public",
  NCatCatAgg.CreateFormProps
>("CreateForm", (agents, context, props) => {
  const { getStore, getController, getResource, getValidator } =
    agents.schemaAgent;

  const schema = getValidator<NCatCatAgg.Validator>(
    "E-Cat",
    "CatCatAgg"
  ).setPet();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NSCatCatAgg.CatStructure>({
    resolver: joiResolver(schema),
  });

  const store = getStore<string, string, NCatCatAgg.Store>(
    "E-Cat",
    "CatCatAgg"
  )();

  const onSubmit: SubmitHandler<NSCatCatAgg.CatStructure> = async (data) => {
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
        <Component<
          Storybooks,
          NextUI.Spaces,
          NextUI.Forms,
          NextUI.BaseFormProps
        >
          storybook={"NextUI"}
          space={"Forms"}
          component={"BaseForm"}
          props={{
            inputs: [
              {
                register: register,
                name: "name",
                placeholder: "Pet name",
              },
              {
                register: register,
                name: "age",
                placeholder: "Pet age",
              },
            ],
            errors: [
              {
                message: errors.name && errors.name.message,
              },
              {
                message: errors.age && errors.age.message,
              },
            ],
            button: {
              name: getResource<NCatCatAgg.Dictionary>(
                "E-Cat",
                "CatCatAgg",
                "buttons.create"
              ),
            },
          }}
        />
      </form>
      <View<
        Services,
        NECat.Domains,
        NCatCatAgg.Views,
        NCatCatAgg.CatCounterProps
      >
        service={"E-Cat"}
        domain={"CatCatAgg"}
        view={"CatCounter"}
      />
    </section>
  );
});
