import { Component, setView } from "~packages";
import styles from "./index.module.scss";

import type { NCatCatAgg, NextUI, Storybooks } from "~client-types";

export const CatCatAggCounterView = setView<
  NCatCatAgg.Views,
  "public",
  NCatCatAgg.CatCounterProps
>("CatCounter", (agents, context, props) => {
  const store = agents.schemaAgent.getStore<string, string, NCatCatAgg.Store>(
    "E-Cat",
    "CatCatAgg"
  )();

  return (
    <div className={styles.container}>
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
          message: `Pets in storage: ${store.count}`,
          className: props?.className,
        }}
      />
    </div>
  );
});
