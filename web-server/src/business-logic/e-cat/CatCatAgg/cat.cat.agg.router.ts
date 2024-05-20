import { ApiResponse, setRouter, StatusCode } from "proton";

import type { ApiRequest } from "proton";
import type { NCatCatAgg } from "~server-types";

const cats: Array<{ name: string; age: number }> = [];

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
    GET: {
      params: [
        {
          name: "catName",
          scope: "required",
        },
      ],
      handler: async (
        request: ApiRequest<void, NCatCatAgg.GetCateAP["params"]>,
        agents,
        context
      ): Promise<
        ApiResponse<NCatCatAgg.GetCateAP["result"] | NCatCatAgg.GetCateAP["nf"]>
      > => {
        const cat = cats.find((c) => c.name === request.params.catName);

        console.log(request.params);
        if (!cat) {
          return {
            format: "json",
            type: "exception",
            data: {
              code: "0001.0001",
              message: "Cat not found",
            },
          };
        }

        return {
          format: "json",
          type: "ok",
          statusCode: StatusCode.SUCCESS,
          data: cat,
        };
      },
    },
  },
});
