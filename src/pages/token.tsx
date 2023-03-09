import type { NextPage } from "next";

export interface NFTType {
  mint: string;
  staked: boolean;
  stakedTime: number;
}

const Token: NextPage = () => {
  return (
    <div className="w-full flex justify-center pt-40 pb-10">
      <div className="w-[900px] text-white px-10">
        <div className="space-y-10 mt-10">
          <h1 className="text-[2rem] font-bold lowercase">
            beast is our native utility erc20 token with the following use
            cases:
          </h1>
          <p className="text-[1.1rem] leading-10 regularfont">
            💠 Airdrop to our NFTs holders.
            <br /> 💠 Give out as daily rewards during NFT staking. <br />
            💠 Pools & Farming on DEX. <br />
            💠 BEAST token exclusive NFT collections.
          </p>
        </div>
        <div className="space-y-10 mt-10">
          <h1 className="text-[2rem] font-bold lowercase">
            beast token-metric.
          </h1>
          <p className="text-[1.1rem] leading-10 regularfont">
            🐦 The maximum supply is 100,000,000 - 100M 🐦 Total supply of BEAST
            is 100M and the allocation is planned like this:
            <br />
            ➡️ NFT Staking pool: 45%.
            <br />
            ➡️ Airdrop to our NFT holders: 30%.
            <br />
            ➡️ Seed liquidity : 10%.
            <br />
            ➡️ Team & developements : 5%.
            <br />
            ➡️ Giveaways : 5%.
            <br />
            ➡️ Partnerships : 5%.
          </p>
        </div>
        <div className="space-y-10 mt-10">
          <h1 className="text-[2rem] font-bold lowercase">
            🐦 beasty token airdrop will be given out as follows:
          </h1>
          <p className="text-[1.1rem] leading-10 regularfont">
            🐦 The maximum supply is 100,000,000 - 100M
            <br /> 🐦 Total supply of BEAST is 100M and the allocation is
            planned like this:
            <br />
            ➡️ Conscious class = 20000 $BEAST per NFT.
            <br />
            ➡️ Subconsciousclass = 30000 $BEAST per NFT.
            <br />
            ➡️ Superconscious = 50000 $BEAST per NFT.
            <br />
            ➡️ Heroes = 190000 $BEAST per NFT.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Token;
