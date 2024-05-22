import { setEmitter } from "@x-fiber/proton";

import type { NCatCatAgg } from "~server-types";

export const CatCatAggEmitter = setEmitter<NCatCatAgg.Events>({
  "cat:notification": {
    "session:to:service": {
      handler: async (
        payload: NCatCatAgg.CatNotifyPayload,
        agents,
        context
      ) => {
        console.log("@_notification", payload.message);
      },
    },
  },
});
