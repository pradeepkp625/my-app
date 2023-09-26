import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log('Inside useEffect'); // Check if this message is logged
    const options = {
      url: url,
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    };
    axios(options)
      .then((response) => {
        console.log('Axios response:', response); // Check if this message and the response are logged
        setData(response.data);
      })
      .catch((error) => {
        console.error('Axios error:', error); // Check if any errors are logged
      });
  }, [url]);

  return [data];
};
export default useFetch;
