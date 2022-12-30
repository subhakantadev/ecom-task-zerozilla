import React, { useEffect } from 'react'

const cart = () => {
    useEffect(()=>{
        var item = JSON.parse(localStorage.getItem("cartProduct"));
        console.log(item);
       
    })
  return (
    <div>cart</div>
  )
}

export default cart