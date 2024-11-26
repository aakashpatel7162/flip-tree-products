import  {createBrowserRouter, Route,createRoutesFromElements} from 'react-router-dom'
import Layout from '../layout/Layout'
import {paths} from'./path'
import ProductListing from '../component/ProductListing'
import Auth from '../auth/Auth'
const allroutes = createRoutesFromElements(
    <> 
    <Route  path="/"  element={<Auth/>}/>
      <Route path="/" element={<Layout/>}>
         <Route path={paths.products} element={<ProductListing/>}/>
  
      </Route>
    </>

)

export const routes=createBrowserRouter(allroutes)