import Web3 from "web3";
declare let window: any;

const getAccount = async () => {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  return accounts[0];
};

const getWeb3 = async () => {
  if (hasWindowEthereum()) {
    try {
      // Si se tiene connexion con Metamask
      const web3 = new Web3(window.ethereum);

      // Solicitud acceso a la cuenta de Metamask
      await window.ethereum.enable();
      return web3;
    } catch (error) {
      console.log(error);
    }
  }

  if (hasWindowWeb3()) {
    // SI se tiene otras wallets o una version mas antigua de Metamask
    return window.web3;
  }
};

const hasWindowEthereum = () => {
  return window.ethereum;
};

const hasWindowWeb3 = () => {
  return window.web3;
};

export { getWeb3, getAccount };
