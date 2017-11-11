import ColourMeLife from 'colour-me-life'
import palx from 'palx'

export const breakpoints = [32, 48, 64, 80]
export const space = [0, 4, 8, 16, 32, 64, 128]
export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96]
export const weights = [400, 500]

const palette = palx('#00CFFF')

const flattened = Object.keys(palette).reduce((a, key) => {
  const value = palette[key]
  if (Array.isArray(value)) {
    a[key] = value[5]
    value.forEach((val, i) => {
      a[key + i] = val
    })
  } else {
    a[key] = value
  }
  return a
}, {})

// todo: flatten

export const colors = Object.assign({}, flattened, {
  black: '#000',
  black90: 'rgba(0,0,0,.9)',
  black80: 'rgba(0,0,0,.8)',
  black70: 'rgba(0,0,0,.7)',
  black60: 'rgba(0,0,0,.6)',
  black50: 'rgba(0,0,0,.5)',
  black40: 'rgba(0,0,0,.4)',
  black30: 'rgba(0,0,0,.3)',
  black20: 'rgba(0,0,0,.2)',
  black10: 'rgba(0,0,0,.1)',
  black05: 'rgba(0,0,0,.05)',
  black025: 'rgba(0,0,0,.025)',
  black0125: 'rgba(0,0,0,.0125)',

  white: '#fff',
  white95: 'rgba(255,255,255,.95)',
  white90: 'rgba(255,255,255,.9)',
  white80: 'rgba(255,255,255,.8)',
  white70: 'rgba(255,255,255,.7)',
  white60: 'rgba(255,255,255,.6)',
  white50: 'rgba(255,255,255,.5)',
  white40: 'rgba(255,255,255,.4)',
  white30: 'rgba(255,255,255,.3)',
  white20: 'rgba(255,255,255,.2)',
  white10: 'rgba(255,255,255,.1)',
  white05: 'rgba(255,255,255,.05)',
  white025: 'rgba(255,255,255,.025)',
  white0125: 'rgba(255,255,255,.0125)'
})

export const radius = 4
export const font = `'Inter UI', -apple-system, BlinkMacSystemFont, sans-serif`
export const monospace = '"SF Mono", "Roboto Mono", Menlo, monospace'

export const cx = key => colors[key] || key
export const gradient = (n, from, to) =>
  `linear-gradient(${n}deg, ${cx(from)}, ${cx(to)})`

const priceScoreGradient = new ColourMeLife()
  .setSpectrum(cx('red'), cx('orange'), cx('teal6'))
  .setNumberRange(0, 100)

export const priceScoreGradientAt = value =>
  `#${priceScoreGradient.colourAt(value)}`

export default {
  breakpoints,
  space,
  fontSizes,
  weights,
  font,
  monospace,
  colors,
  radius
}
