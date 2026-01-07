import { NextResponse } from 'next/server';

export async function POST(req) {
    const body = await req.json();

    // You can save to DB / send email here
    console.log(body);

    return NextResponse.json(
        { message: 'Inquiry submitted successfully' },
        { status: 200 }
    );
}
