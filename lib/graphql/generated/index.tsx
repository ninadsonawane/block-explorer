import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Attribute = {
  __typename?: 'Attribute';
  trait_type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type BlockOutput = {
  __typename?: 'BlockOutput';
  base_fee_per_gas?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['Float']>;
  extra_data?: Maybe<Scalars['String']>;
  gas_limit: Scalars['Float'];
  gas_used: Scalars['Float'];
  hash: Scalars['String'];
  logs_bloom?: Maybe<Scalars['String']>;
  miner: Scalars['String'];
  nonce?: Maybe<Scalars['Float']>;
  number: Scalars['Float'];
  parent_hash?: Maybe<Scalars['String']>;
  receipts_root?: Maybe<Scalars['String']>;
  sha3_uncles?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  state_root?: Maybe<Scalars['String']>;
  timestamp: Scalars['String'];
  total_difficulty?: Maybe<Scalars['Float']>;
  transaction_count: Scalars['Float'];
  transactions_root?: Maybe<Scalars['String']>;
};

export type BlockPaginationOutput = {
  __typename?: 'BlockPaginationOutput';
  block: Array<BlockOutput>;
  totalPages: Scalars['Float'];
};

export type ContractOutput = {
  __typename?: 'ContractOutput';
  address: Scalars['String'];
  block_hash: Scalars['String'];
  block_number: Scalars['Float'];
  block_timestamp: Scalars['String'];
  bytecode: Scalars['String'];
  function_sighashes: Scalars['String'];
  is_erc20: Scalars['Boolean'];
  is_erc721?: Maybe<Scalars['Boolean']>;
  is_erc1155?: Maybe<Scalars['Boolean']>;
};

export type LogOutput = {
  __typename?: 'LogOutput';
  address: Scalars['String'];
  block_hash: Scalars['String'];
  block_number: Scalars['Float'];
  block_timestamp: Scalars['String'];
  data?: Maybe<Scalars['String']>;
  log_index: Scalars['Float'];
  topic0?: Maybe<Scalars['String']>;
  topic1?: Maybe<Scalars['String']>;
  topic2?: Maybe<Scalars['String']>;
  topic3?: Maybe<Scalars['String']>;
  transaction_hash: Scalars['String'];
  transaction_index: Scalars['String'];
};

export type Metadata = {
  __typename?: 'Metadata';
  animation_url?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<Attribute>>;
  background_color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  external_url?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  image_data?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  youtube_url?: Maybe<Scalars['String']>;
};

export type NftInput = {
  contractAddress?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['String']>;
};

export type NftOutput = {
  __typename?: 'NFTOutput';
  block_number?: Maybe<Scalars['Float']>;
  block_number_hour?: Maybe<Scalars['Float']>;
  contract_address?: Maybe<Scalars['String']>;
  metadata?: Maybe<Metadata>;
  name?: Maybe<Scalars['String']>;
  owner_of?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  token_standard?: Maybe<Scalars['String']>;
  token_uri?: Maybe<Scalars['String']>;
};

export type PagesInput = {
  next?: InputMaybe<Scalars['Float']>;
  pageSize: Scalars['Float'];
  previous?: InputMaybe<Scalars['Float']>;
};

export type PaginationInput = {
  pageNo: Scalars['Float'];
  pageSize: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  getBlockByHash: Array<BlockOutput>;
  getBlockByNumber: BlockOutput;
  getBlocks: BlockPaginationOutput;
  getContractByAddress: ContractOutput;
  getContractsByBlockNumber: Array<ContractOutput>;
  getLogByTransactionHash: Array<LogOutput>;
  getNFTByContractAddress: Array<NftOutput>;
  getTokenByContractAddress: TokenOutput;
  getTransactionByHash: TransactionsOutput;
  nfts: Array<NftOutput>;
  transactions: TransactionsPaginationOutput;
};


export type QueryGetBlockByHashArgs = {
  data: Scalars['String'];
};


export type QueryGetBlockByNumberArgs = {
  data: Scalars['Float'];
};


export type QueryGetBlocksArgs = {
  data: PagesInput;
};


export type QueryGetContractByAddressArgs = {
  data: Scalars['String'];
};


export type QueryGetContractsByBlockNumberArgs = {
  data: Scalars['Float'];
};


export type QueryGetLogByTransactionHashArgs = {
  data: Scalars['String'];
};


export type QueryGetNftByContractAddressArgs = {
  input: NftInput;
};


export type QueryGetTokenByContractAddressArgs = {
  data: Scalars['String'];
};


export type QueryGetTransactionByHashArgs = {
  data: Scalars['String'];
};


export type QueryTransactionsArgs = {
  data: TransactionsPagesInput;
};

export type Subscription = {
  __typename?: 'Subscription';
  blockAdded: BlockOutput;
  nftTransactions: Array<NftOutput>;
};

export type TokenOutput = {
  __typename?: 'TokenOutput';
  address: Scalars['String'];
  block_hash: Scalars['String'];
  block_number: Scalars['Float'];
  block_timestamp: Scalars['String'];
  decimal?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  symbol?: Maybe<Scalars['String']>;
  total_supply: Scalars['String'];
};

export type TransactionsOutput = {
  __typename?: 'TransactionsOutput';
  block_hash: Scalars['Float'];
  block_number: Scalars['Float'];
  block_timestamp: Scalars['String'];
  from_address?: Maybe<Scalars['String']>;
  gas: Scalars['Float'];
  gas_price: Scalars['Float'];
  hash: Scalars['String'];
  input?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['Float']>;
  parent_hash?: Maybe<Scalars['String']>;
  receipt_contract_address?: Maybe<Scalars['String']>;
  receipt_cumulative_gas_used?: Maybe<Scalars['Float']>;
  receipt_gas_used?: Maybe<Scalars['Float']>;
  receipt_root?: Maybe<Scalars['String']>;
  receipt_status?: Maybe<Scalars['Float']>;
  to_address?: Maybe<Scalars['String']>;
  transaction_index?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

export type TransactionsPagesInput = {
  blockHash?: InputMaybe<Scalars['String']>;
  pagesInput: PagesInput;
};

export type TransactionsPaginationOutput = {
  __typename?: 'TransactionsPaginationOutput';
  totalPages: Scalars['Float'];
  transactions: Array<TransactionsOutput>;
};

export type GetBlocksQueryVariables = Exact<{
  data: PagesInput;
}>;


export type GetBlocksQuery = { __typename?: 'Query', getBlocks: { __typename?: 'BlockPaginationOutput', totalPages: number, block: Array<{ __typename?: 'BlockOutput', number: number, timestamp: string, miner: string, transaction_count: number }> } };

export type GetTransactionsQueryVariables = Exact<{
  transactionsdata: TransactionsPagesInput;
}>;


export type GetTransactionsQuery = { __typename?: 'Query', transactions: { __typename?: 'TransactionsPaginationOutput', totalPages: number, transactions: Array<{ __typename?: 'TransactionsOutput', hash: string, block_timestamp: string, from_address?: string | null, to_address?: string | null }> } };


export const GetBlocksDocument = gql`
    query getBlocks($data: PagesInput!) {
  getBlocks(data: $data) {
    totalPages
    block {
      number
      timestamp
      miner
      transaction_count
    }
  }
}
    `;

/**
 * __useGetBlocksQuery__
 *
 * To run a query within a React component, call `useGetBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlocksQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetBlocksQuery(baseOptions: Apollo.QueryHookOptions<GetBlocksQuery, GetBlocksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlocksQuery, GetBlocksQueryVariables>(GetBlocksDocument, options);
      }
export function useGetBlocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlocksQuery, GetBlocksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlocksQuery, GetBlocksQueryVariables>(GetBlocksDocument, options);
        }
export type GetBlocksQueryHookResult = ReturnType<typeof useGetBlocksQuery>;
export type GetBlocksLazyQueryHookResult = ReturnType<typeof useGetBlocksLazyQuery>;
export type GetBlocksQueryResult = Apollo.QueryResult<GetBlocksQuery, GetBlocksQueryVariables>;
export const GetTransactionsDocument = gql`
    query getTransactions($transactionsdata: TransactionsPagesInput!) {
  transactions(data: $transactionsdata) {
    totalPages
    transactions {
      hash
      block_timestamp
      from_address
      to_address
    }
  }
}
    `;

/**
 * __useGetTransactionsQuery__
 *
 * To run a query within a React component, call `useGetTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionsQuery({
 *   variables: {
 *      transactionsdata: // value for 'transactionsdata'
 *   },
 * });
 */
export function useGetTransactionsQuery(baseOptions: Apollo.QueryHookOptions<GetTransactionsQuery, GetTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransactionsQuery, GetTransactionsQueryVariables>(GetTransactionsDocument, options);
      }
export function useGetTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionsQuery, GetTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransactionsQuery, GetTransactionsQueryVariables>(GetTransactionsDocument, options);
        }
export type GetTransactionsQueryHookResult = ReturnType<typeof useGetTransactionsQuery>;
export type GetTransactionsLazyQueryHookResult = ReturnType<typeof useGetTransactionsLazyQuery>;
export type GetTransactionsQueryResult = Apollo.QueryResult<GetTransactionsQuery, GetTransactionsQueryVariables>;