import React ,{useEffect,useState} from 'react'
import styled from 'styled-components'
import {Link,useParams} from 'react-router-dom'
import {motion } from 'framer-motion'
import Navbar from "./Navbar";

function Cusine() {

const [cusine,setCusine] =useState([])
let Params =useParams()

const getCusine = async(name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes= await data.json()
        setCusine(recipes.results)
        console.log(recipes.results)
    }

 useEffect(()=>{
    getCusine(Params.type)

 },[Params.type])   

  return (
    <div>
    <Navbar/>
    <Grid>
      { cusine.map((item)=>{
          return(
            <Card>
              <Link to={'/recipe/'+item.id}>
              <img src={item.image} alt=""/>
              <h4>{item.title}</h4>
              </Link>
            </Card>
          )
        })
      }
    </Grid>
    </div>
  )
}

const Grid =styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(15rem, .5fr));
    grid-gap: 3rem;
    margin-top: 4rem;
    `;

const Card =styled.div`
    img{
      width :50%;
      border-radius: 2rem;
      max-height:15rem;
    }
    a{
      text-decoration:none;
    }
    h4{
      
      padding: 1rem;
    }`;

export default Cusine 