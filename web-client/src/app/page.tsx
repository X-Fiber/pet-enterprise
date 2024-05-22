"use client";
import { Component, View } from "~packages";
import styles from "./page.module.scss";

import type {
  Services,
  NECat,
  NCatCatAgg,
  Storybooks,
  NextUI,
} from "~client-types";

export default function Home() {
  return (
    <section className={styles.section}>
      <Component<
        Storybooks,
        NextUI.Spaces,
        NextUI.Labels,
        NextUI.BaseLabelProps
      >
        storybook={"NextUI"}
        space={"Labels"}
        component={"BaseLabel"}
        props={{
          message: "Add your Pet!",
          className: styles.title,
        }}
      />
      <View<Services, NECat.Domains, NCatCatAgg.Views>
        service={"E-Cat"}
        domain={"CatCatAgg"}
        view={"CreateForm"}
      />
    </section>
  );
}
