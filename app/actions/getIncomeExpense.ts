'use server';
import { db } from '@/lib/db';

async function getIncomeExpense(): Promise<{
  income?: number;
  expense?: number;
  error?: string;
}> {
  try {
    const transactions = await db.transaction.findMany();

    const amounts = transactions.map((transaction) => transaction.amount);

    const income = amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => acc + item, 0);

    const expense = amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => acc + item, 0);

    return { income, expense: Math.abs(expense) };
  } catch (error) {
    return { error: 'Database error' };
  }
}

export default getIncomeExpense;
