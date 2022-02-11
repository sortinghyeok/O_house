import React from 'react'
import styled from 'styled-components'

const PaletteElement = (props) => {
  const { border } = props
  return <Pal {...props} style={{ backgroundColor: props.color }} />
}

PaletteElement.defaultProps = {
  border: false,
}

const Pal = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 20px;
  border: ${(props) => (props.border ? '1px solid lightgray' : '')};
  &:hover {
    cursor: pointer;
  }
`

export default PaletteElement
