//Plug connection
import * as backend from "../../declarations/hey_backend/index.js"
console.log(backend.canisterId)
// Canister Ids
const CanisterId = "qoctq-giaaa-aaaaa-aaaea-cai";
// const CanisterId = backend;
// Whitelist
const whitelist = [CanisterId];

// Host
const host = "https://mainnet.dfinity.network";

const connectBtn = document.querySelector(".connectBtn");
async function connectplug() {

  // Callback to print sessionData
  const onConnectionUpdate = () => {
    console.log(window.ic.plug.sessionManager.sessionData);
  };

  // Make the request
  try {
    const isConnected = await window.ic.plug.requestConnect({
      whitelist,
      host,
      onConnectionUpdate,
      timeout: 50000,
    });

    if (!isConnected) {
      connectBtn.innerText = "Failed To connect";
      return;
    }else{
    // Get the user principal id
    const principalId = await window.ic.plug.agent.getPrincipal()

    console.log(`Plug's user principal Id is ${principalId}`)
    connectBtn.innerText= principalId
    return
    }
  } catch (e) {
    console.log(e);
  }
}

export {
    connectplug
}