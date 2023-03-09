import { useState } from "react";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import PageLoading from "../components/PageLoading";
import "../styles/style.scss";

import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from 'ethers'
import { motion } from "framer-motion";

import Footer from "../components/Footer";

function StakingApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  const getLibrary = (provider) => {
    const library = new ethers.providers.Web3Provider(provider)
    library.pollingInterval = 8000 // frequency provider is polling
    return library
  }

  const getChainId = (provider) => {
    const library = new ethers.providers.Web3Provider(provider)
    return library.chainId
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
    >
     <Web3ReactProvider getLibrary={getLibrary} chainId={getChainId}>
      <Header />
      <Component
        {...pageProps}
        startLoading={() => setLoading(true)}
        closeLoading={() => setLoading(false)}
      />
      <ToastContainer style={{ fontSize: 14 }} />
      <PageLoading loading={loading} />
      <Footer />
    </Web3ReactProvider>
    </motion.section>
  );
}

export default StakingApp;
