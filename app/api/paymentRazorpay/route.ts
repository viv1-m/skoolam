// pages/api/payment.ts

import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: "rzp_test_5gg9qIA2JKb1Fz",
  key_secret: "UYixrT2BE9XW3SPCttYsrJzi",
});

export async function POST(req: NextRequest, res: any) {
  console.log("Request received")
  if (req.method === 'POST') {
    const body = await req.json();
    console.log("Body: ",body);

    const { amount, currency } = body;

    const options = {
      amount: amount * 100, // amount in the smallest currency unit (paise for INR)
      currency: currency,
      receipt: 'order_rcptid_1',
    };
    
    console.log(options);

    // res.status(200).json({options});
    // return NextResponse.json({ data: 'Yippee' }, { status: 200 })

    try {
      const order = await razorpay.orders.create(options);
      return NextResponse.json(order, { status: 200 })
    } catch (error) {
      NextResponse.json({ error: `Error creating order: ${error}` }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
  }
}
