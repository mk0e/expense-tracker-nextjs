import AddTransaction from '@/components/AddTransaction';
import Balance from '@/components/Balance';
import IncomeExpense from '@/components/IncomeExpense';
import TransactionList from '@/components/TransactionList';

const HomePage = () => {
  return (
    <main>
      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <TransactionList />
    </main>
  );
};

export default HomePage;
