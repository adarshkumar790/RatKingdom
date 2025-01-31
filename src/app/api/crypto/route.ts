import { NextResponse } from 'next/server';
import axios from 'axios';

const COINMARKETCAP_API_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || '';

export async function GET() {
  if (!COINMARKETCAP_API_KEY) {
    return NextResponse.json({ error: 'API key is missing.' }, { status: 500 });
  }

  try {
    const { data } = await axios.get(COINMARKETCAP_API_URL, {
      headers: {
        'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY,
        'Accepts': 'application/json',
      },
      params: {
        start: 1,
        limit: 100, 
        convert: 'USD',
      },
    });

    // Top 5 highest-priced coins
    const top5Highest = data.data
      .map((crypto: any) => ({
        name: crypto.name,
        symbol: crypto.symbol,
        price: crypto.quote.USD.price,
        change: crypto.quote.USD.percent_change_24h, 
      }))
      .sort((a: any, b: any) => b.price - a.price)
      .slice(0, 4);

    
    top5Highest.splice(3, 0, {
      name: 'Kingdom',
      symbol: 'RATS',
      price: 0.01,
      change: 0, 
    });

  
    const top5Newest = data.data
      .map((crypto: any) => ({
        name: crypto.name,
        symbol: crypto.symbol,
        price: crypto.quote.USD.price,
        change: crypto.quote.USD.percent_change_24h, 
        dateAdded: crypto.date_added,
      }))
      .sort((a: any, b: any) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
      .slice(0, 5);

    return NextResponse.json({
      top5Highest,
      top5Newest,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch cryptocurrency data' }, { status: 500 });
  }
}
