import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'

function Reciepe() {

  let params=useParams()
  const [info ,setInfo] =useState({})
  const [active, setActive] =useState('instructions')
  const [ingre, setIngre] =useState({} )

  const getInfo=async (names)=>{
    const api = await fetch(`https://api.spoonacular.com/recipes/${names}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const data = await api.json();
    setInfo(data)
    console.log(data)
    setIngre(data.extendedIngredients)
    console.log(data.extendedIngredients)
}

useEffect(()=>{
  getInfo(params.name)
},[params.name])

  return (
    <div>
  <Navbar/>
   
    <DetailWrapper>  
      <div>
        <h2>{info.title}</h2>
        <img src={info.image} alt=""/>
       </div>
       <Info>
       <Button className={active === 'ingredient' ? 'active' : ""} onClick={()=>{setActive('ingredient')}}>ingredient</Button>
        <Button className={active === 'instructions' ? 'active' : ""} onClick={()=>{setActive('instructions')}}>instructions</Button>
        {active=== 'instructions' &&(
        <div>
          <h4>{info.instructions}</h4>
        </div>
        )}
{active=== 'ingredient' &&(
  <div>
{
  ingre.map((item)=>{
    return(
      <li>{item.original}</li>
    )
}  )}</div>) }           
       </Info>
    </DetailWrapper>
    </div>
  )
}


const DetailWrapper=styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
      background: black;
      color: white;
    }
    h2{
      margin-bottom: 2rem;
    }
    li{
      font-size: 1.2rem;
      line-height: 2.5rem;
    }
    ul{
      margin-top: 2rem;
    }
    img{
      max-height: 20rem;
    }`

const Button= styled.button`
    padding: 1rem 2rem;
    color: black;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
    `

const Info=styled.div`
    margin-left: 5rem;
    `

export default Reciepe