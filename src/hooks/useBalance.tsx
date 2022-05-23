import { useAppSelector } from './index';

const useBalance = () => {
  const balance = useAppSelector(state => state.balance);

  return {
    balance,
  };
};

export default useBalance;
