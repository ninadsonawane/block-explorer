import Hero from '@components/Home/Hero';
import SummaryBlocks from '@components/Home/SummaryBlocks';
import type { NextPage } from 'next';
import LatestData from '@components/Home/LatestData';
import { useState } from 'react';

const Home: NextPage = () => {       // app starts from here.
  const [latestBlocksGroup, setLatestBlocksGroup] = useState<number>();
  return (
    <>
      <Hero />     // displays search box and title.
      <SummaryBlocks setLatestBlocksGroup={setLatestBlocksGroup} />    // middle UI section fetches data & displays it
      <LatestData latestBlocksGroup={latestBlocksGroup} /> .   // latest blocks and transactions component also fetches data 
    </>
  );
};

export default Home;
