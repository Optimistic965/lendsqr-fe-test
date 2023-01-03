import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';


export const UserDetail = () => {
  
  const {id} = useParams();
  const [url, setUrl] = useState(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)

  const {dt, isPending, error} = useFetch(url, "get");


  console.log(dt)

  return (
    <>
       user-detail  {id}
    </>
  )
}
