'use server';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

async function deleteTransaction(transactionId: string): Promise<{
  message?: string;
  error?: string;
}> {
  try {
    await db.transaction.delete({
      where: {
        id: transactionId,
      },
    });

    revalidatePath('/');

    return { message: 'Transaction deleted' };
  } catch (error) {
    return { error: 'Database error' };
  }
}

export default deleteTransaction;
