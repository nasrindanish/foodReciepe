import React from 'react'
import {FaPizzaSlice,FaHamburger } from 'react-icons/fa'
import {GiNoodles,GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'


function category() {
  return (
    <List>

        <Slink to={'/cusine/italian'}>
            <FaPizzaSlice/>
            <h4>italian</h4> 
        </Slink>

        <Slink to={'/cusine/american'}>
            <FaHamburger/>
            <h4>american</h4> 
        </Slink>

        <Slink to={'/cusine/thai'}>
            <GiNoodles/>
            <h4>thai</h4> 
        </Slink>

        <Slink to={'/cusine/chinese'}>
            <GiChopsticks/>
            <h4>chinese</h4> 
        </Slink>

    </List>
  )
}


const List =styled.div`
    display:flex;
    justify-content:center;
    margin: 2rem;
`;

const Slink =styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    `;

export default category