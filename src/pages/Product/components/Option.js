import React from 'react'
import styled from 'styled-components'
import { OptionSelectView } from '.'
import { Star } from '../../../components'

const Option = () => {
  return (
    <Container>
      <NamePrice>
        <Company>폴인퍼니</Company>
        <Name>[연휴특가] 감성으로 채운 세라믹식탁/식탁의자 모음전</Name>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Star rating={4.5} size="20px" />
          <Review>1093개 리뷰</Review>
        </div>
        <Price>188,000원</Price>
      </NamePrice>
      <OptionSelectView />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const NamePrice = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom: 1px solid #eeeeee;
`
const Company = styled.span`
  color: gray;
  margin-bottom: 5px;
`
const Name = styled.h3``
const Review = styled.span`
  font-weight: bold;
  font-size: 15px;
  color: ${(props) => props.theme.mainColor};
  margin-left: 10px;
`
const Price = styled.span`
  font-weight: bold;
  font-size: 30px;
`
export default Option
