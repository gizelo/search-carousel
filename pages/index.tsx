import Head from "next/head";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Search from "../components/Search";

import styles from "../styles/Home.module.css";

export interface IBlockchain {
  name: string;
  icon: string;
  coins: { name: string; icon: string }[];
}

const blockchainData: IBlockchain[] = [
  {
    name: "Ethereum",
    icon: "eth.png",
    coins: [
      {
        name: "Ethereum",
        icon: "eth.png",
      },
      {
        name: "USDT",
        icon: "usdt.png",
      },
      {
        name: "USDC",
        icon: "usdc.png",
      },
      {
        name: "Uniswap",
        icon: "uniswap.png",
      },
      {
        name: "Dai",
        icon: "dai.png",
      },
      {
        name: "SHIBA INU",
        icon: "shibainu.png",
      },
      {
        name: "ChainLink Token",
        icon: "chain-link-token.png",
      },
      {
        name: "ApeCoin",
        icon: "ape-coin.png",
      },
      {
        name: "KuCoin",
        icon: "ku-coin.png",
      },
      {
        name: "BAT",
        icon: "bat.png",
      },
      {
        name: "EnjinCoin",
        icon: "enjin-coin.png",
      },
      {
        name: "1INCH Token",
        icon: "1inch.png",
      },
      {
        name: "Amp",
        icon: "amp.png",
      },
      {
        name: "Compound",
        icon: "compound.png",
      },
      {
        name: "Trader Joe",
        icon: "trader-loe.png",
      },
      {
        name: "Frax",
        icon: "frax.png",
      },
    ],
  },
  {
    name: "Polygon",
    icon: "Polygon.png",
    coins: [
      {
        name: "Matic",
        icon: "Matic.png",
      },
    ],
  },
  {
    name: "Binance",
    icon: "Binance.png",
    coins: [
      {
        name: "Binance",
        icon: "Binance.png",
      },
      {
        name: "Binance USD",
        icon: "BUSD.png",
      },
    ],
  },
  {
    name: "Fantom",
    icon: "Fantom.png",
    coins: [
      {
        name: "Fantom",
        icon: "Fantom.png",
      },
    ],
  },
  {
    name: "Avalanche",
    icon: "Avalanche.png",
    coins: [
      {
        name: "Avalanche",
        icon: "Avalanche.png",
      },
      {
        name: "Wavax",
        icon: "Wavax.png",
      },
    ],
  },
];

const blockchains = blockchainData.map((chain, id) => {
  return { name: chain.name, icon: chain.icon, id };
});

const coins = [];
blockchainData.map((chain) => {
  chain.coins.forEach((coin, id) => coins.push({ ...coin, id }));
});

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(null);

  const slideTo = (index: number) => currentSlide.slideTo(index);

  const searchHandle = (text: string) => {
    const foundCoin = coins.find((el) => el.name === text);
    // console.log(slideNumber);
    slideTo(foundCoin?.id || 0);
  };

  return (
    <div>
      <Head>
        <title>Search Carousel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.content}>
        <Search searchHandle={searchHandle} />
        <div className={styles.carouselWrapper}>
          <Carousel
            data={blockchains}
            itemBg={"star1.png"}
            setCurrentSlide={setCurrentSlide}
          />
        </div>
        <div className={styles.carouselWrapper}>
          <Carousel
            data={coins}
            itemBg={"star2.png"}
            setCurrentSlide={setCurrentSlide}
            reverseDirection
          />
        </div>
      </div>
    </div>
  );
}
