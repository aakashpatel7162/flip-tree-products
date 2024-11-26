import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {routes} from './Allroutes'
export default function Routeprovider() {
  return (
    <RouterProvider  router={routes}/>
  )
}
