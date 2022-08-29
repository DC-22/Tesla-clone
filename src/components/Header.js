import React , { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from "../features/car/carSlice";
import { useSelector } from "react-redux"; 

function Header() {

  const [burgerStatus,setBurgerStatus]= React.useState(false);
  const cars= useSelector(selectCars)
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt=""/>
      </a>

      <Menu>
          <a href="#"> Model S</a>
          <a href="#"> Model 3</a>
          <a href="#"> Model X</a>
          <a href="#"> Model Y</a>
        

      </Menu>
      <RightMenu>
        <a href="">Shop</a>
        <a href="">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerMenu show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() =>setBurgerStatus(false)}/>
        </CloseWrapper>
          <li><a href=""> Model S</a></li>
          <li><a href=""> Model 3</a></li>
          <li><a href=""> Model X</a></li>
          <li><a href=""> Model Y</a></li>
          <li><a href=""> Existing Inventory</a></li>
          <li><a href=""> Used Inventory</a></li>
          <li><a href=""> Trade-in</a></li>
          <li><a href=""> Test Drive</a></li>
          <li><a href=""> Insurance</a></li>
          <li><a href=""> Cybertruck</a></li>
          <li><a href=""> Roadster</a></li>
          <li><a href=""> Find Us</a></li>
          <li><a href=""> Support</a></li>
        
      </BurgerMenu>
      

    </Container>

    
  )
}

export default Header

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items:center;
padding: 0 20px;
justify-content: space-between;
top: 0;
left: 0;
right: 0;
z-index:1;
a{
  cursor: pointer;
}


`
const Menu= styled.div`
display:flex;
align-items: center;
flex:1;
justify-content: center;

a{
  font-weight : 600;
  text-transformation : uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
}
@media(max-width: 768px){
  display: none;
}



`
const RightMenu = styled.div`
display: flex;
align-items: center;
cursor: pointer;
a{
  font-weight : 600;
  text-transformation : uppercase;
  flex-wrap: nowrap;
  margin-right: 10px;
}



`
const CustomMenu= styled(MenuIcon)`


`
const BurgerMenu= styled.div`
right:0;
top:0;
bottom:0;
background-color: white;
position:fixed;
width:300px;
z-index: 16;
padding:20px;
list-style:none;
flex-direction: column;
display: flex;
text-align: start;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.2s;
li{
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

}
a{
  font-weight: 600;
}



`

const CustomClose= styled(CloseIcon)`


`
const CloseWrapper= styled.div`
display:flex;
justify-content: flex-end;
cursor: pointer;
`