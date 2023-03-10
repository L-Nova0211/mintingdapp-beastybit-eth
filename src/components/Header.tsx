import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import * as AIicon from "react-icons/ai";
import * as Ioicon from "react-icons/io";

import { useWeb3React } from "@web3-react/core";
import { injected } from "../connecthook/connect";
import { switchNetwork } from "../connecthook/switch-network";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const { account, chainId, activate, deactivate } = useWeb3React();

  async function connect() {
    if (chainId !== 114 || chainId === undefined) {
      switchNetwork();
    }
    try {
      console.log("clicked");
      await activate(injected);
      localStorage.setItem("isWalletConnected", "true");
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", "false");
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(injected);
          localStorage.setItem("isWalletConnected", "true");
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
  }, []);

  return (
    <header className="w-full bg-gray-300 bg-opacity-80 h-20 flex justify-between px-4 fixed z-[9999]">
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Link href={`/`}>
        <div className="logo cursor-pointer">
          <img src="/logo.png" className="w-20 h-20" />
        </div>
      </Link>
      <div className="gap-10 items-center justify-center lg:flex hidden">
        <div className="flex justify-between items-center">
          <ul className="flex gap-7 items-center justify-between w-full">
            <Link href={"/"}>
              <li
                className={`text-[1.5rem] hover:text-white duration-300 transition-all cursor-pointer ${
                  router.pathname === "/" ? "text-red-500 underline" : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link href={"/mint"}>
              <li
                className={`text-[1.5rem] hover:text-white duration-300 transition-all cursor-pointer ${
                  router.pathname === "/mint" ? "text-red-500 underline" : ""
                }`}
              >
                Collection
              </li>
            </Link>
            <Link href={"/roadmap"}>
              <li
                className={`text-[1.5rem] hover:text-white duration-300 transition-all cursor-pointer ${
                  router.pathname === "/roadmap" ? "text-red-500 underline" : ""
                }`}
              >
                Roadmap
              </li>
            </Link>
            <Link href={"/membership"}>
              <li
                className={`text-[1.5rem] hover:text-white duration-300 transition-all cursor-pointer ${
                  router.pathname === "/membership"
                    ? "text-red-500 underline"
                    : ""
                }`}
              >
                Membership
              </li>
            </Link>
            <Link href={"/faq"}>
              <li
                className={`text-[1.5rem] hover:text-white duration-300 transition-all cursor-pointer ${
                  router.pathname === "/faq" ? "text-red-500 underline" : ""
                }`}
              >
                Faq
              </li>
            </Link>
            <Link href={"/token"}>
              <li
                className={`text-[1.5rem] hover:text-white duration-300 transition-all cursor-pointer ${
                  router.pathname === "/token" ? "text-red-500 underline" : ""
                }`}
              >
                Beasttoken
              </li>
            </Link>
          </ul>
        </div>
        {/* <div className="flex items-center justify-center">
          <DiscordIcon color="#000000" />
        </div>
        <div className="flex items-center justify-center">
          <TwitterIcon color="#000000" />
        </div> */}
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          className="w-[170px] bg-black py-3 text-white flex justify-center items-center hover:bg-gray-800 duration-300 transition-all text-[1.2rem] gap-3"
          onClick={() => {
            !account ? connect() : disconnect();
          }}
        >
          <p className="mb-[5px]">
            <Ioicon.IoIosWallet size={20} />
          </p>
          <p className="flex items-center justify-center">
            {!account
              ? "Connect Wallet"
              : account.toString().slice(0, 4) +
                "..." +
                account.toString().slice(-4)}
          </p>
        </button>
        <div className="lg:hidden cursor-pointer" onClick={() => setOpen(true)}>
          <AIicon.AiOutlineMenu size={20} fontWeight={800} />
        </div>
      </div>
      {open && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.2, delay: 0.1 }}
        >
          <div className="fixed w-full right-0 bottom-0 left-0 bg-gray-800 min-h-screen opacity-[98%]">
            <div
              className="w-full flex justify-end p-7 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <AIicon.AiOutlineClose color="white" fontWeight={800} size={20} />
            </div>
            <div className="w-full p-10 flex justify-center">
              <div className="w-full text-center">
                <Link href={"/"}>
                  <div
                    className={`text-[2rem] hover:text-white duration-300 transition-all cursor-pointer list-none ${
                      router.pathname === "/"
                        ? "text-red-500 underline"
                        : "text-white"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </div>
                </Link>
                <Link href={"/mint"}>
                  <div
                    className={`text-[2rem] hover:text-white duration-300 transition-all cursor-pointer list-none ${
                      router.pathname === "/mint"
                        ? "text-red-500 underline"
                        : "text-white"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    Collection
                  </div>
                </Link>
                <Link href={"/roadmap"}>
                  <div
                    className={`text-[2rem] hover:text-white duration-300 transition-all cursor-pointer list-none ${
                      router.pathname === "/roadmap"
                        ? "text-red-500 underline"
                        : "text-white"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    Roadmap
                  </div>
                </Link>
                <Link href={"/membership"}>
                  <div
                    className={`text-[2rem] hover:text-white duration-300 transition-all cursor-pointer list-none ${
                      router.pathname === "/membership"
                        ? "text-red-500 underline"
                        : "text-white"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    Membership
                  </div>
                </Link>
                <Link href={"/faq"}>
                  <div
                    className={`text-[2rem] hover:text-white duration-300 transition-all cursor-pointer list-none ${
                      router.pathname === "/faq"
                        ? "text-red-500 underline"
                        : "text-white"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    Faq
                  </div>
                </Link>
                <Link href={"/token"}>
                  <div
                    className={`text-[2rem] hover:text-white duration-300 transition-all cursor-pointer list-none ${
                      router.pathname === "/token"
                        ? "text-red-500 underline"
                        : "text-white"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    Beasttoken
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </header>
  );
}
