'use server';
import { db } from '@/lib/db';

async function getUserBalance(): Promise<{
  balance?: number;
  error?: string;
}> {
  try {
    const transactions = await db.transaction.findMany();

    const balance = transactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );

    return { balance };
  } catch (error) {
    return { error: 'Database error' };
  }
}

export default getUserBalance;
