export interface PaymentPremium {
    payment_id: number;
    payment_method: string;
    amount: number;
    status: string;
    invoice: string;
    created_at: Date;
    updated_at: Date;
    // getPaymentsPremium(): void;
    // createPaymentPremium(): void;
    // updatePaymentPremium(): void;
    // deletePaymentPremium(): void;
  }
  