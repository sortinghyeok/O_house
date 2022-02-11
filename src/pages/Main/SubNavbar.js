import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const SubNavbar = () => {
  let now = null
  const navSelect = useSelector((state)=>state.navbar.navSelect)
  console.log(navSelect);

  if (navSelect === 'community') {
    //0번탭
    now = (
      <NavBar id="subNavBar">
        <NavList>
          <NavItem>
            <Link to="/story">
              <NavText>스토리</NavText>
            </Link>
          </NavItem>
          <Link to="/advices">
            <NavText>노하우</NavText>
          </Link>
          <Link to="/event">
            <NavText>이벤트</NavText>
          </Link>
        </NavList>
      </NavBar>
    )
  } else {
    //1번 탭
    now = (
      <NavBar id="subNavBar">
        <NavList>
          <NavItem>
            <NavText>카테고리</NavText>
          </NavItem>
          <NavItem>
            <NavText>오늘의 딜</NavText>
          </NavItem>
          <NavItem>
            <NavText>프리미엄</NavText>
          </NavItem>
        </NavList>
      </NavBar>
    )
  }

  return <div>{now}</div>
}


export default SubNavbar
const NavItem = styled.li`
  display: flex;
  text-align: -webkit-match-parent;
`
const NavText = styled.div`
  position: relative;
  display: inline-block;
  margin: 6px 10px 0;
  padding: 7px 6px;
  font-size: 14px;
  line-height: 26px;
  font-weight: 700;
  color: #424242;
  cursor: pointer;
`
const NavList = styled.ul`
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`
const NavBar = styled.nav`
width : 1256px;
display: flex;
background-color: #fff;
border-bottom: 1px solid #ededed;
margin:0 auto;
}
`
