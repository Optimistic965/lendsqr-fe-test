import {useEffect, useRef, useState} from 'react'
import axios from 'axios';

type fetchResObj = {
  dt: [] | null,
  isPending: boolean,
  error: string | null
}



const useFetch = (url: string, method: string, params?: {}, data? : {}): fetchResObj => {
  //Setting the states and return values
  const [dt, setDt] = useState< [] | null>(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    setIspending(true);
    axios(
      {
        method: method,
        url: url
      }
     )
    .then((res) => {
      setIspending(false)
      setDt(res.data);
      setError(null);
    })
    .catch(err => {
      setError(err);
      setIspending(false);
    })

  }, [url, method])


  return { dt, isPending, error }
}


export default useFetch;