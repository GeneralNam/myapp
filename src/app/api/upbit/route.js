// app/api/upbit/route.js
import { NextResponse } from 'next/server';
import { createClient } from '@/app/utils/supabase/server';

export async function GET() {
    const options = {
        uri: "https://api.upbit.com/v1/market/all?is_details=true",
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    try {
        const response = await fetch(options.uri, {
            method: options.method,
            headers: options.headers,
        });

        if (!response.ok) {
            throw new Error(`API 요청 실패: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);



        return NextResponse.json(data);
    } catch (error) {
        console.error('API 호출 오류:', error);
        return NextResponse.json(
            { error: '데이터 가져오기 실패' },
            { status: 500 }
        );
    }
}