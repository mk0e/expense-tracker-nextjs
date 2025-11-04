'use server';
import { db } from '@/lib/db';
import { Transaction } from '@/types/Transaction';

async function getTransactions(): Promise<{
  transactions?: Transaction[];
  error?: string;
}> {
  try {
    const transactions = await db.transaction.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { transactions };
  } catch (error) {
    return { error: 'Database error' };
  }
}

export default getTransactions;
