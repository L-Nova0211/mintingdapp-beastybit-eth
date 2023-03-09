import type { NextPage } from "next";
import Link from "next/link";

export interface NFTType {
  mint: string;
  staked: boolean;
  stakedTime: number;
}

const Faq: NextPage = () => {
  return (
    <div className="w-full flex justify-center pt-40 pb-10">
      <div className="w-[900px] text-white px-10">
        <div className="space-y-10 mt-10">
          <h1 className="text-[2rem] font-bold lowercase">
            1. how much does each beasty phoneix nft cost?
          </h1>
          <p className="text-[1.1rem] leading-10 regularfont">
            The price for each drop is set at $45 (in SGB).
          </p>
        </div>
        <div className="space-y-10 mt-10">
          <h1 className="text-[2rem] font-bold lowercase">
            2. how many beasts can roam one wallet?
          </h1>
          <p className="text-[1.1rem] leading-10 regularfont">
            There is no limit, if luck allows then more the merrier. However we
            have placed a limit of 1 NFT per mint transaction to encourage fair
            distribution.
          </p>
        </div>
        <div className="space-y-10 mt-10">
          <h1 className="text-[2rem] font-bold lowercase">
            3. are some beasts caged?
          </h1>
          <p className="text-[1.1rem] leading-10 regularfont">
            For sure. 2% of the entire series is locked and used for marketing
            and giveaways.
          </p>
        </div>
        <div className="space-y-10 mt-10">
          <h1 className="text-[2rem] font-bold lowercase">
            4. what good is a beast for?
          </h1>
          <p className="text-[1.1rem] leading-10 regularfont">
            Holders will receive membership of the The Beasty Bits Club which
            offers a number of unique benefits such as BEAST Token Airdrop.
            <br />
            See {` `}
            <Link href={"/membership"}>
              <span className="text-red-700 hover:text-blue-700 underline duration-300 transition-all sitefont">
                membership
              </span>
            </Link>
            {` `}
            benefits for more info.
          </p>
        </div>
        <div className="space-y-10 mt-10">
          <h1 className="text-[2rem] font-bold lowercase">
            5. how to get a beast?
          </h1>
          <p className="text-[1.1rem] leading-10 regularfont">
            Each minting will be done via our {` `}
            <Link href={"/collection"}>
              <span className="text-red-700 hover:text-blue-700 underline duration-300 transition-all sitefont">
                mint page.
              </span>
            </Link>
            {` `} You have to be fast and ready! benefits for more info.
          </p>
        </div>
        <div className="space-y-10 mt-10">
          <h1 className="text-[2rem] font-bold lowercase">
            6. whats is required to get a beast?
          </h1>
          <p className="text-[1.1rem] leading-10 regularfont">
            To mint, you will need to use Biforst or Metamask wallet. You will
            then need to connect the wallet and ensure you have enough SGB to
            cover the cost of mint.
          </p>
        </div>
        <div className="space-y-10 mt-10">
          <h1 className="text-[2rem] font-bold lowercase">
            7. can a beast be returned for xrp or sgb?
          </h1>
          <p className="text-[1.1rem] leading-10 regularfont">
            No, since transactions executed on the blockchain are irreversible,
            we do not offer refunds.
          </p>
        </div>
        <div className="space-y-10 mt-10">
          <h1 className="text-[2rem] font-bold lowercase">
            still scratching head?
          </h1>
          <p className="text-[1.1rem] leading-10 regularfont">
            If you have any other questions, feel free to message us on Discord
            or Twitter, where one of the team will be more than willing to help
            you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
