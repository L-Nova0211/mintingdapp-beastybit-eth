import { useState, useEffect } from "react";
import type { NextPage } from "next";

import * as FaIcons from "react-icons/fa";

export interface NFTType {
  mint: string;
  staked: boolean;
  stakedTime: number;
}

const Home: NextPage = () => {
  return (
    <main className="w-full px-10 py-10">
      <div className="w-full flex justify-center items-center pt-40">
        <img
          src="img/banner.jpg"
          className="w-full object-cover justify-center flex items-center"
        />
      </div>
      <div className="w-full">
        <p className="text-white text-center text-md regularfont">Learn more</p>
        <div className="w-full flex justify-center mt-4">
          <FaIcons.FaArrowDown color="white" />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[900px] text-white">
          <div className="space-y-10 mt-10">
            <h1 className="text-[2rem] font-bold lowercase">
              WHO ARE THE BEASTY BITS
            </h1>
            <p className="text-[1.1rem] leading-10 regularfont">
              We are beasts in the form of humans. We have series of beasts,
              each serie with 3 collections. Each collection gives a membership
              status and a share of the proceedings from the next series.
            </p>
          </div>
          <div className="space-y-10 mt-10">
            <h1 className="text-[2rem] font-bold lowercase">
              why become a beast?
            </h1>
            <p className="text-[1.1rem] leading-10 regularfont">
              As a beast, you will not only get 1:1 AD in that same series, but
              also be able to participate in various votings that will shape the
              future collections. The benefits do not stop there, as ofcourse
              more and more series mean more and more profits just by holding
              the NFT.
              <br />
              <br />
              Beasty Bits is a community centered project.
            </p>
          </div>
          <div className="space-y-10 mt-10">
            <h1 className="text-[2rem] font-bold lowercase">
              how do i become a member?
            </h1>
            <p className="text-[1.1rem] leading-10 regularfont">
              {`The Beasty Bits Club has three tiers - Majestic Beast, Mythical
              Beast and Legendary Beast. To qualify for a given membership you
              must own one of each collection, up to that membership tier. For
              example, for Mjaestic Beast Membership (top tier), you need all
              three drops while from Mythical Beast Membership (mid tier) only
              the second and third drop are requied and the Legendary Beast
              Membership (low tier) only requires the last drop.`}
              <br />
              <br />
              You will automatically reserve your membership spot when you mint
              your first drop, as you will be airdropped one NFT in both of the
              subsequent drops. This means that if you mint the genesis drop of
              a series and keep it till the last drop, you will automatically
              qualify as a Majestic Beast.
            </p>
          </div>
          <div className="space-y-10 mt-10">
            <h1 className="text-[2rem] font-bold lowercase">
              beasty bits pricing
            </h1>
            <p className="text-[1.1rem] leading-10 regularfont">
              Each Phoneix NFT of Beasty Bits will be worth $45 at the time of
              the launch.
            </p>
            <p className="text-[1.1rem] leading-10 regularfont">
              First collection of 200 beasts is necessary for the Majestic Beast
              Membership (along with second and third collection).
            </p>
            <p className="text-[1.1rem] leading-10 regularfont">
              Second collection of 600 beasts is necessary for the Mythical
              Beast Membership (along with third collection).
            </p>
            <p className="text-[1.1rem] leading-10 regularfont">
              Third collection of 1800 beasts is necessary for the Legendary
              Beast Membership.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
