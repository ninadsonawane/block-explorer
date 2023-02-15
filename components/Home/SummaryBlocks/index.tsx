import Graph from '@components/Home/Graph';
import SummaryBlock from '@components/Home/SummaryBlock';
import {
  CardsBox,
  Container,
  GraphBox,
  PriceStack,
  TransactionStack,
  SkeletonWrapper,
} from './styles';
import { Dashboard_AnalyticsQuery } from 'lib/graphql/generated/generate';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  GraphData,
  SummaryBlocksDataPrice,
  SummaryBlocksDataTransactions,
} from 'types';
import {
  GET,
  handleError,
  mapRawDataToGraphData,
  mapRawDataToSummaryBlocks,
  mapRawDataToSummaryTransactions,
} from 'utils';
import CustomSkeleton from '@components/shared/CustomSkeleton';

interface SummaryBlocksInterfce {
  setLatestBlocksGroup: Dispatch<SetStateAction<number | undefined>>;
}

const SummaryBlocks = ({ setLatestBlocksGroup }: SummaryBlocksInterfce) => {
  const [graph, setGraph] = useState<GraphData[]>();                     // usestate hook to set graph data @initialized
  const [dashboardAnalytics, setDashboardAnalytics] =                    // usestate hook to set dashboardAnalytics data @initialized
    useState<Dashboard_AnalyticsQuery>();
  const [summaryBlocksDataPriceList, setSummaryBlocksDataPriceList] =     // usestate hook to set summaryblockspricelist @initialized
    useState<SummaryBlocksDataPrice[]>();
  const [
    summaryBlocksDataTransactionsList,                                 // usestate hook to set summaryBlocksDataTransactionsList  @initialized
    setSummaryBlocksDataTransactionsList,                              
  ] = useState<SummaryBlocksDataTransactions[]>();

  useEffect(() => {       // useEffect runs only once when the component first renders
    (async () => {
      const { data, error } = await GET('getDashboardAnalytics');           // extracts data from GET (API) function, 
      setDashboardAnalytics(data);    // dashboardAnalytics becomes data at this point @set

      if (error) {
        handleError('getDashboardAnalytics', error);
      }
    })();
  }, []);

  useEffect(() => {           // useEffect runs when values of dashboardAnalytics changes
    if (dashboardAnalytics) {
      const blocksList: SummaryBlocksDataPrice[] =
        mapRawDataToSummaryBlocks(dashboardAnalytics); // prebuilt functions from utils/index.tsx (to convert dashboardAnalytics into something)

      const transactionsList: SummaryBlocksDataTransactions[] =
        mapRawDataToSummaryTransactions(dashboardAnalytics);  // prebuilt functions from utils/index.tsx (to convert dashboardAnalytics into something)


      const graphData: GraphData[] = mapRawDataToGraphData(dashboardAnalytics); // prebuilt functions from utils/index.tsx (to convert dashboardAnalytics into graph data)


      setSummaryBlocksDataPriceList(blocksList);   // summaryBlocksDataPriceList becomes blocksList at this point @set
      setSummaryBlocksDataTransactionsList(transactionsList);    // summaryBlocksDataTransactionsList becomes transactionsList at this point @set
      setGraph(graphData);      // dashboardAnalytics becomes graphData at this point @set
      setLatestBlocksGroup(
        dashboardAnalytics?.dashboard_analytics?.values?.[0]
          ?.latest_blocks_group
      );                          // latestBlocksGroup becomes latest_blocks_group at this point @set (NOTE THAT THIS SETSTATE HOOK IS SENT FROM PARENTS)
    }
  }, [dashboardAnalytics, setLatestBlocksGroup]);


  // UI PART ALL THE EXTRACTED DATA DISPLAYED HERE OR PASSED TO CHILD COMPONENTS
  return (
    <Container>
      <CardsBox>
        <PriceStack>
          {summaryBlocksDataPriceList ? (         // if summaryBlocksDataPriceList data exists map it and display it using Summary block child component, if doesn't exist show skeletons 
            summaryBlocksDataPriceList.map((item, index) => (
              <SummaryBlock
                key={index}
                icon={item.icon}
                title={item.title}
                value={item.value}
                stat={item.stat}
                supportingStat={item.supportingStat}
                fontSizeOfValue={item.fontSizeOfValue}
              />
            ))
          ) : (
            <SkeletonWrapper>
              <CustomSkeleton rows={5} />
            </SkeletonWrapper>
          )}
        </PriceStack>
        <TransactionStack>
          {summaryBlocksDataTransactionsList ? (  // if summaryBlocksDataTransactionsList data exists map it and display it using Summary block child component, if doesn't exist show skeletons
            summaryBlocksDataTransactionsList.map((item, index) => (
              <SummaryBlock
                key={index}
                icon={item.icon}
                title={item.title}
                value={item.value}
                stat={item.stat}
                secondaryTitle={item.secondaryTitle}
                secondaryValue={item.secondaryValue}
                fontSizeOfValue={item.fontSizeOfValue}
                secondayStat={item.secondaryStat}
              />
            ))
          ) : (
            <SkeletonWrapper>
              <CustomSkeleton rows={5} />
            </SkeletonWrapper>
          )}
        </TransactionStack>
      </CardsBox>
      <GraphBox>
        {graph ? (          // if graph data exists map it and display it using Graph component block child component, if doesn't exist show skeletons
          <Graph graph={graph} />
        ) : (
          <SkeletonWrapper>
            <CustomSkeleton rows={5} />
          </SkeletonWrapper>
        )}
      </GraphBox>
    </Container>
  );
};

export default SummaryBlocks;
