//Model
import * as model from "./model";

//Functions
import * as state from "./functions/State";
import * as history from "./functions/history";
import * as requests from "./functions/requests";

//Helpers
import * as Helpers from "./helpers";

//view
import requestView from "./view/requestView";

// ----------------- Control ADD Event Listeners

(() => {
  state.controlAuthState();
  requestView.controlRequestStatusBuy(requests.controlRequestBuy);
  requestView.controlRequestStatusSell(requests.controlRequestSell);
  requestView.controlActiveRequests(requests.activeRequests);
})();
