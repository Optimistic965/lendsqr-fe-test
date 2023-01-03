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

  
  useEffect(() => {
    let source = axios.CancelToken.source();

    const fetchData = () => {

      try {
        setIspending(true);
        axios(
          {
            method: method,
            url: url,
            cancelToken: source.token
          }
        )
        .then((res) => {
          setIspending(false);
          setDt(res.data);
          setError(null);
        })
      } catch (error) {
        if(axios.isCancel(error)){
          console.log("Caught cancel");
        } else {
          throw error;
        }
        setIspending(false); 
      }
  }

  fetchData();

  return( () => {
    source.cancel();
  })
  }, [method])


  return { dt, isPending, error }
}


export default useFetch;