import { useState } from "react";
import type { NextPage } from "next";
import * as AIicon from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PageLoading from "../components/PageLoading";
import { useWeb3React } from "@web3-react/core";
import { errorAlert } from "../components/toastGroup";

export interface NFTType {
  mint: string;
  staked: boolean;
  stakedTime: number;
}

const Mint: NextPage = () => {
  const { account } = useWeb3React();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 500,
    fade: true,
  };

  const [mintCount, setMintCount] = useState<number>(1);
  const [startLoading, setStartLoading] = useState<boolean>(false);

  const handleMintFunc = () => {
    if (account) {
      setStartLoading(true);
    } else {
      errorAlert("Please connect wallet");
    }
  };

  return (
    <div className="w-full px-10 py-10 justify-center pt-40 items-center flex">
      <div className="lg:w-[500px] w-[350px] md:w-[500px] border-2 border-gray-400 p-2">
        <p className="text-[2rem] text-white text-center mt-10">
          The Beasty Bits Presents Beasty Phoenix
        </p>
        <div className="p-2">
          <Slider {...settings} className="mx-3 my-2" cssEase="ease-in-out">
            {nftArray.map((data, index) => (
              <img
                src={data.imgurl}
                key={index}
                className="w-full object-cover"
              />
            ))}
          </Slider>
        </div>
        <p className="text-[1rem] text-white text-center mt-2">
          The Beasty Bits Presents Beasty Phoenix
        </p>
        <p className="text-[1rem] text-white text-center mt-2">
          Minting Cost = $45 in SGB
        </p>
        <div className="w-full flex justify-between p-3 gap-5">
          <button
            className={`px-5 py-1 text-black hover:bg-gray-600 duration-200 transition-all ${
              mintCount <= 1 ? "bg-gray-600  cursor-not-allowed" : "bg-gray-200"
            }`}
            onClick={() =>
              mintCount <= 1 ? setMintCount(1) : setMintCount(mintCount - 1)
            }
          >
            <AIicon.AiOutlineMinus color="black" />
          </button>
          <p className="text-[2rem] text-white">{mintCount}</p>
          <button
            className={`px-5 py-1 bg-gray-200 text-black hover:bg-gray-600 duration-200 transition-all ${
              mintCount >= 5 ? "bg-gray-600 cursor-not-allowed" : "bg-gray-200"
            }`}
            onClick={() =>
              mintCount >= 5 ? setMintCount(5) : setMintCount(mintCount + 1)
            }
          >
            <AIicon.AiOutlinePlus color="black" />
          </button>
        </div>
        <div className="w-full flex justify-center p-3">
          <button
            className="w-full py-2 bg-gray-200 text-black hover:bg-gray-600 duration-200 transition-all text-[1.5rem]"
            onClick={() => handleMintFunc()}
          >
            Mint
          </button>
        </div>
        <p className="text-[1rem] text-white text-center mt-2">
          The Beasty Bits Presents Beasty Phoenix{" "}
          <a
            href="https://xrp.cafe/collection/madmonkeys"
            target="_blank"
            rel="referrer"
            className="text-red-700 underline hover:text-blue-700 duration-300 transition-all"
          >
            XRP.CARE
          </a>
        </p>
      </div>
      {startLoading && <PageLoading loading={true} />}
    </div>
  );
};

type NFTIMG = {
  id: number;
  imgurl: string;
};

const nftArray: NFTIMG[] = [
  {
    id: 1,
    imgurl: "/img/nft/v4-slider-img.png",
  },
  {
    id: 9,
    imgurl: "/img/nft/v4-slider-img2.png",
  },
  {
    id: 2,
    imgurl: "/img/nft/v4-slider-img3.png",
  },
  {
    id: 3,
    imgurl: "/img/nft/v4-slider-img4.png",
  },
  {
    id: 4,
    imgurl: "/img/nft/v4-slider-img5.png",
  },
  {
    id: 5,
    imgurl: "/img/nft/v4-slider-img6.png",
  },
  {
    id: 6,
    imgurl: "/img/nft/v4-slider-img7.png",
  },
  {
    id: 7,
    imgurl: "/img/nft/v4-slider-img8.png",
  },
  {
    id: 8,
    imgurl: "/img/nft/v4-slider-img9.png",
  },
  {
    id: 16,
    imgurl: "/img/nft/v4-slider-img10.png",
  },
  {
    id: 10,
    imgurl: "/img/nft/v4-slider-img11.png",
  },
  {
    id: 11,
    imgurl: "/img/nft/v4-slider-img12.png",
  },
  {
    id: 12,
    imgurl: "/img/nft/v4-slider-img13.png",
  },
  {
    id: 13,
    imgurl: "/img/nft/v4-slider-img14.png",
  },
  {
    id: 14,
    imgurl: "/img/nft/v4-slider-img15.png",
  },
  {
    id: 15,
    imgurl: "/img/nft/v4-slider-img16.png",
  },
];

export default Mint;
