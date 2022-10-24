import React from 'react'
import { useState,useEffect} from 'react'
import {useParams } from 'react-router-dom'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'

function Searched() {

    const [searched,setSearched]=useState([])
    let params =useParams()


const searchedCusine = async(name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes= await data.json()
        setSearched(recipes.results)
        console.log(recipes.results)
    }

    useEffect(()=>{
        searchedCusine(params.search)

    },[params.search])


  return (
    <div>
      <Navbar/>
    
    <Grid>
      { searched.map((item)=>{
          return(
            <Card key={item.id}>
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

export default Searched