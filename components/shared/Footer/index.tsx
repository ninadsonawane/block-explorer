import { Stack } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'
import { Wrapper, Container, StyledTypography } from './styles'

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Stack spacing={'24px'} direction={'row'}>
          <StyledTypography color={colors.neutral100}>
            Krypton © 2022
          </StyledTypography>
          <StyledTypography color={colors.neutral100}>
            🚀️ Powered By Astra - <span>See How It’s Done</span>
          </StyledTypography>
        </Stack>
      </Wrapper>
    </Container>
  )
}

export default Footer
