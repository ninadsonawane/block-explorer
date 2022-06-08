import { Stack } from '@mui/material'
import React from 'react'
import {
  BlockStyle,
  FontStyling,
} from '@components/shared/Pagination/UpperPagination/styles'
import PaginationButton from '../../PaginationButton'

interface UpperPaginationProps {
  transaction: boolean
}

const UpperPagination = (props: UpperPaginationProps) => {
  return (
    <FontStyling>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" spacing={2}>
          {props.transaction ? (
            <>
              More than {'>'} 1,586,808,272 transactions found{' '}
              <BlockStyle> (Showing the last 500k records) </BlockStyle>
            </>
          ) : (
            <>
              Block #14849876 to #14849876{' '}
              <BlockStyle> (Total of 14,849,877 blocks) </BlockStyle>
            </>
          )}
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          <PaginationButton rtl="true" />
          <span>Page 1 of 593996</span>
          <PaginationButton />
        </Stack>
      </Stack>
    </FontStyling>
  )
}

export default UpperPagination
