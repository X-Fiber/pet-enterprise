import { setController } from "~packages";

import type { NCatCatAgg } from "~client-types";
import type { NCatCatAgg as NSCatCatAgg, NECat, Services } from "~server-types";

export const CatCatAggController = setController<NCatCatAgg.Routines>({
  sendCat: {
    scope: "public",
    handler: async (
      agents,
      context,
      data: NSCatCatAgg.CatStructure
    ): Promise<NCatCatAgg.Store["count"]> => {
      try {
        const payload = await agents.fnAgent.route.request<
          Services,
          NECat.Domains,
          NSCatCatAgg.Routes
        >("E-Cat", "CatCatAgg", "cat", {
          method: "POST",
          data: {
            name: data.name,
            age: data.age,
          },
        });

        return payload.body.data.catCount;
      } catch (e) {
        throw e;
      }
    },
  },
  getCat: {
    scope: "public",
    handler: async (agents, context, data) => {
      try {
        const payload = await agents.fnAgent.route.request<
          Services,
          NECat.Domains,
          NSCatCatAgg.Routes
        >("E-Cat", "CatCatAgg", "cat", {
          method: "GET",
          params: {
            catName: data,
          },
        });
        return { name: payload.body.data.name, age: payload.body.data.age };
      } catch (e) {
        throw e;
      }
    },
  },
});
