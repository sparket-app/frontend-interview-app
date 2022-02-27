import { Server } from "miragejs";
import poolsResponse from "./responses/pools-index";
import poolDetailsResponse from "./responses/pool-details";
import bet from "./responses/bet-creation";

const setupServer = () => {
  new Server({
    routes() {
      // get list of pools
      this.get("/pools", poolsResponse.pools as any);

      // get pool details
      this.get("/pool/:id", poolDetailsResponse as any);

      // make a bet
      this.post("/bet", bet as any);
    },
  });
};
export default setupServer;
