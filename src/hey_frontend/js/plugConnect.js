//Plug connection
import * as backend from "../../declarations/hey_backend/index.js"

async function plugConnect() {
  console.log(backend.canisterId)
  // Canister Ids
  // const CanisterId = "qoctq-giaaa-aaaaa-aaaea-cai";
  const CanisterId = backend.canisterId;
  // Whitelist
  const whitelist = [CanisterId];

  // Host
  const host = "https://mainnet.dfinity.network";



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

    if (!isConnected)
      throw new Error("Failed to connect")

    // Get the user principal id
    const principalId = await window.ic.plug.agent.getPrincipal()

    console.log(`Plug's user principal Id is ${principalId}`)
    return principalId.toString()
  } catch (e) {
    console.log(e);
    throw e
  }
}
async function whoami() {
  const iAm = await backend.hey_backend.me();
  console.log(iAm)
}
export {
  plugConnect,
  whoami
}