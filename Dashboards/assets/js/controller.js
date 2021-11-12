//Model
import * as model from "./model";

//Functions
import * as state from "./functions/State";

//Helpers
import * as Helpers from "./helpers";

const controlCancelDom = () => {};

// ----------------- Control ADD Event Listeners

(() => {
  state.controlAuthState();
})();
