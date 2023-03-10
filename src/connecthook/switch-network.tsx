const switchNetworkRequest = () =>
  (window as any).ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: "0x72" }],
  });

const addNetworkRequest = () =>
  (window as any).ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0x72",
        chainName: "coston2 testnet",
        rpcUrls: ["https://coston-api.flare.network/ext/bc/C/rpc"],
        blockExplorerUrls: ["https://coston2-explorer.flare.network/"],
        nativeCurrency: {
          name: "C2FLR",
          symbol: "C2FLR",
          decimals: 16,
        },
      },
    ],
  });

export const switchNetwork = async () => {
  if (window as any) {
    try {
      await switchNetworkRequest();
    } catch (error) {
      if ((error as any).code === 4902) {
        try {
          await addNetworkRequest();
          await switchNetworkRequest();
        } catch (addError) {
          console.log(error);
        }
      }
      console.log(error);
    }
  }
};
