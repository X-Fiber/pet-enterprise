import { ApiResponse, setRouter, StatusCode } from "~packages";

import type { ApiRequest } from "~packages";
import type { NCatCatAgg } from "~server-types";

const cats: Array<NCatCatAgg.CatStructure> = [];

export const CatCatAggRouter = setRouter<NCatCatAgg.Routes>({
  cat: {
    POST: {
      version: "v1",
      scope: "public:route",
      handler: async (
        request: ApiRequest<NCatCatAgg.CreateCatAP["body"]>,
        agents,
        context
      ): Promise<ApiResponse<NCatCatAgg.CreateCatAP["result"]>> => {
        const { name, age } = request.body;

        cats.push({ name, age });

        agents.fnAgent.logger.debug(
          `@Cat Names: ${cats.map((c) => c.name).join(", ")}`
        );

        return {
          format: "json",
          type: "ok",
          statusCode: StatusCode.CREATED,
          data: {
            catCount: cats.length,
          },
        };
      },
    },
  },
});
