import styled from "styled-components";
import React, {useState} from 'react';


//grid는 12개로 구성, 즉 2/8/2 그리드 구성을 통해 가운데 정렬 역할을 하게 한 것
const Board = () => {
  const[date, setDate] = useState({year : "", month : "", date : ""})

  const settingDate = () => {
    const today = new Date();
    setDate({year : today.getFullYear(), 
    month : today.getMonth(),
    date : today.getDate()}
    )
  }
  return (
   <Container>
     <Row>
        <Card>
        One of three columns
        <button onClick = {settingDate}>{date.year}</button>
        </Card>      
        <Card>
        One of three columns
        <button onClick = {settingDate}>{date.year}</button>
        </Card>
    </Row>
    <Row>
        <Card>
        One of three columns
        <button onClick = {settingDate}>{date.year}</button>
        </Card>      
        <Card>
        One of three columns
        <button onClick = {settingDate}>{date.year}</button>
        </Card>
    </Row>
    <Row>
        <Card>
        One of three columns
        <button onClick = {settingDate}>{date.year}</button>
        </Card>      
        <Card>
        One of three columns
        <button onClick = {settingDate}>{date.year}</button>
        </Card>
    </Row>
    <Row>
        <Card>
        One of three columns
        <button onClick = {settingDate}>{date.year}</button>
        </Card>      
        <Card>
        One of three columns
        <button onClick = {settingDate}>{date.year}</button>
        </Card>
    </Row>
   </Container>
  )
}

const Container = styled.div`
  margin : 200px;
`;

const Row = styled.div`
  display : grid;
  grid-template-columns: 420px 420px;
  grid-template-rows: 100px 100px;
`;

const Card = styled.div`
  height : 100px;
  width : 95%;
  margin : 20px;
  border-style: solid;
  border-radius : 15px;
`;

export default Board