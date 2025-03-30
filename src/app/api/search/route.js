import { NextResponse } from 'next/server';
import { createClient } from '@/app/utils/supabase/server';



export async function GET(request) {
    const supabase = createClient();
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query || query.length < 1) {
        return NextResponse.json({ data: [] });
    }

    try {
        const { data, error } = await supabase
            .from('symbol')
            .select('*')
            .ilike('name', `${query}%`)
            .limit(10);

        if (error) throw error;

        return NextResponse.json({ data });
    } catch (error) {
        console.error('Search API error:', error);
        return NextResponse.json(
            { error: 'Failed to search coins' },
            { status: 500 }
        );
    }
}