import {
  useGetExchangeRatesQuery,
  useGetDolarBlueRateQuery,
} from '../redux/slices/api';

const useApi = () => {
  return {
    useGetExchangeRatesQuery,
    useGetDolarBlueRateQuery,
  };
};

export default useApi;
