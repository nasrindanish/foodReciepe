import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Category from "../components/category";
import Search from '../components/search';
import Navbar from "./Navbar";

import React from 'react'

function Home() {
  return (
    <div>
        <Navbar/>
        <Search/>
        <Category/>
        <Popular/>
        <Veggie/>
    </div>
  )
}

export default Home