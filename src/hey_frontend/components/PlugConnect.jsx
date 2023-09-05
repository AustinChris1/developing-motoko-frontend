(async () => {
  // Canister Ids
  const nnsCanisterId = 'qoctq-giaaa-aaaaa-aaaea-cai'

  // Whitelist
  const whitelist = [
    nnsCanisterId,
  ];

  // Host
  const host = "https://mainnet.dfinity.network";

  // Callback to print sessionData
  const onConnectionUpdate = () => {
    console.log(window.ic.plug.sessionManager.sessionData)
  }

  // Make the request
  try {
    const publicKey = await window.ic.plug.requestConnect({
      whitelist,
      host,
      onConnectionUpdate,
      timeout: 50000
    });
    console.log(`The connected user's public key is:`, publicKey);
  } catch (e) {
    console.log(e);
  }
})();