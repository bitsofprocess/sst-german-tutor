import { bucket, table } from "./storage";

export const api = new sst.aws.ApiGatewayV2("Api", {
  transform: {
    route: {
      handler: {
        link: [table],
      },
      args: {
        auth: { iam: true }
      },
    }
  }
});

api.route("GET /", {
  link: [bucket],
  handler: "packages/functions/src/api.handler",
});