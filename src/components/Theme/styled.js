const theme = prop => value => props => props.theme[prop][value] || value

export const th = {
  space: theme('spaces'),
  size: theme('fontSizes'),
  color: theme('colors'),
}

export const flexbox = props => {
  const flexDirection =
    typeof props.flexbox === 'boolean' ? props.flexDirection : props.flexbox

  const justifyContent = props.justifyContent || (props.center && 'center')
  const alignItems = props.alignItems || (props.center && 'center')

  return `
    ${props.flexbox ? 'display: flex;' : ''}
    ${props.flex ? `flex: ${props.flex};` : ''}
    ${flexDirection ? `flex-direction: ${flexDirection};` : ''}
    ${justifyContent ? `justify-content: ${justifyContent};` : ''}
    ${alignItems ? `align-items: ${alignItems};` : ''}
  `
}

export const background = props =>
  props.bg && `background: ${props.theme.colors[props.bg] || props.bg};`

export const font = props => {
  const color =
    props.color && `color: ${props.theme.colors[props.color] || props.color};`

  const size =
    Object.prototype.hasOwnProperty.call(props, 'fontSize') &&
    `font-size: ${props.theme.fontSizes[props.fontSize] || props.fontSize}px;`

  return `
    ${color ? color : ''}
    ${size ? size : ''}
  `
}

export const margin = props => {
  const mt = props.mt ?? props.my ?? props.m ?? ''
  const mr = props.mr ?? props.mx ?? props.m ?? ''
  const mb = props.mb ?? props.my ?? props.m ?? ''
  const ml = props.ml ?? props.mx ?? props.m ?? ''

  return `
    ${mt !== '' ? `margin-top: ${props.theme.spaces[mt]}px;` : ''}
    ${mr !== '' ? `margin-right: ${props.theme.spaces[mr]}px;` : ''}
    ${mb !== '' ? `margin-bottom: ${props.theme.spaces[mb]}px;` : ''}
    ${ml !== '' ? `margin-left: ${props.theme.spaces[ml]}px;` : ''}
  `
}

export const padding = props => {
  const pt = props.pt ?? props.py ?? props.p ?? ''
  const pr = props.pr ?? props.px ?? props.p ?? ''
  const pb = props.pb ?? props.py ?? props.p ?? ''
  const pl = props.pl ?? props.px ?? props.p ?? ''

  return `
    ${pt !== '' ? `padding-top: ${props.theme.spaces[pt]}px;` : ''}
    ${pr !== '' ? `padding-right: ${props.theme.spaces[pr]}px;` : ''}
    ${pb !== '' ? `padding-bottom: ${props.theme.spaces[pb]}px;` : ''}
    ${pl !== '' ? `padding-left: ${props.theme.spaces[pl]}px;` : ''}
  `
}
