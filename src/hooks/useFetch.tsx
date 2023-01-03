import {useEffect, useState} from 'react'
import axios from 'axios';

type fetchResObj = {
  dt: [] | undefined,
  isPending: boolean,
  error: string | null
}



const useFetch = (url: string, method: string, params?: {}, data? : {}): fetchResObj => {
  //Setting the states and return values
  const [dt, setDt] = useState< [] | undefined>(undefined);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = () => {
    (() => setIspending(true))();
    axios(
      {
        method: method,
        url: url
      }
    )
    .then((res) => {
      (() => setIspending(false))();
      (() => setDt(res.data))();
      (() => setError(null))();
    })
    .catch(err => {
      setError(err);
      setIspending(false);
    })
}

  useEffect(() => {
  fetchData();
  }, [method])


  return { dt, isPending, error }
}


export default useFetch;