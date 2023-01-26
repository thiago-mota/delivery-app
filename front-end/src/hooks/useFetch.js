import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (options) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { method, endpoint, payload, ...axiosOptions } = options;
        const responseJSON = await axios[method](
          endpoint,
          payload,
          axiosOptions,
        );
        setData(responseJSON);
        setIsLoading(false);
      } catch (error) {
        setIsError(error);
      }
    };
    fetchData();
    console.log('useFetch');
  }, [options]);
  return [data, isLoading, isError];
};

export default useFetch;
