import React from 'react'
import ProductListing from '../component/ProductListing'
import Header from './Header'
export default function Layout() {
  return (
    <div style={{width:"100%", boxSizing:"border-box"}}>
      <Header/>
        <ProductListing/>
 </div>
  )
}
