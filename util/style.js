import { css } from 'styled-components'

export const media = {
  mobile: (...args) => css`
    @media screen and (min-width: 40em) {
      ${css(...args)}
    }
  `,
  medium: (...args) => css`
    @media screen and (min-width: 52em) {
      ${css(...args)}
    }
  `,
  large: (...args) => css`
    @media screen and (min-width: 64em) {
      ${css(...args)}
    }
  `
}
