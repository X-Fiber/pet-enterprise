import { setView } from "display";
import { useEffect } from "react";
import { NCatCatAgg } from "~types";

export const catInfo = setView("CatInfo", (agents, context, props) => {
  const { getStore, getController } = agents.schemaAgent;

  const store = getStore<string, string, NCatCatAgg.Store>(
    "E-Cat",
    "CatCatAgg"
  )();

  useEffect(() => {
    const handler = async () => {
      try {
        const cat = await getController<NCatCatAgg.Controller>(
          "E-Cat",
          "CatCatAgg",
          "getCat"
        ).getCat("3123");
        store.setPet(cat);
      } catch (e) {
        console.log(e);
      }
    };

    handler();
  }, []);

  return (
    <>
      <div>{store.age}</div>
    </>
  );
});
