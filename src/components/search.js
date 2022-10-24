import React,{useState} from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
function Search() {

const [input,setInput] = useState('')
const navigate =useNavigate()

const submitHandler =(e)=>{
  e.preventDefault()
  navigate('/searched/'+input)

}


  return (
    <Formstyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input 
        onChange = {(e)=>{setInput(e.target.value)}}
        value={input}
        type="text"/>
        </div>

    </Formstyle>
  )
}

const Formstyle =styled.form`
    margin: 2rem 15rem;
   
    div{
      position: relative;
      width: 100%;
    }
    input{
        border: none;
        background: linear-gradient(35deg ,#494949, #313131);
        font-size: 1rem;
        color: white;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        height:0rem;
        padding: 2rem;

    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100% ,-50%);
        color: white;
    }`

export default Search