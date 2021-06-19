import React, {useEffect,useState}from "react"
import styled from "styled-components"
import AllBooks from "./AllBooks"

const Collection = ()=>{

const [allBooks,setAllBooks]=useState([])
useEffect(()=>{
    fetch('/catalogue/all-books',{method:"GET"})
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log("data",data)
        const bookArray = Object.values(data)[1]
        setAllBooks(bookArray.reverse())
    })
},[])
    return(<><BookWrap>{allBooks.map((book)=>{
        return <AllBooks key={book._id} book={book}/>
    })}</BookWrap></>)

}
const BookWrap = styled.div`
margin-top: 15px;
display:flex;
flex-flow:row wrap;
justify-content:center;`

export default Collection