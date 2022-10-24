import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {GiKnifeFork} from 'react-icons/gi'

function Navbar() {
  return (
    <Nav>
        <GiKnifeFork/>
        <Logo to={"/"}>delicious</Logo>
    </Nav>
  )
}


const Logo=styled(Link)`
    text-decoration:none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
`

const Nav=styled.div`
    padding: 4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-item: center;
    svg{
        font-size: 2rem;
    }
`

export default Navbar