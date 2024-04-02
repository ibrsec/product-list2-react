import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

const SearchBox = ({allProducts,productsOnScreen, setProductsOnScreen,choosenCategory ,inputValue,setInputValue}) => {

  const handleSearchChange = (e) => {
    setInputValue(e.target.value.trim().toLowerCase())
  } 


  return (
    <Container>

    <input className="form-control w-75 m-auto text-center" type="text" name="" id="" placeholder="Search here..." onChange={handleSearchChange} value={inputValue}/>
    </Container>
  )
}

export default SearchBox;