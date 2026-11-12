import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';
import { ALL_PRODUCTS } from '@/lib/data';

export async function POST(req: NextRequest) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const { message, history } = await req.json();

    const systemInstruction = `You are the AI purchasing assistant and beauty expert for "Passionate Beauty Store", a premium beauty and salon store in Nigeria.
    Be helpful, polite, and concise. Make sure your tone is professional but warm, similar to a boutique store clerk.
    Answer user queries by recommending products strictly from our catalog if relevant.

    Here is our product catalog data:
    ${JSON.stringify(ALL_PRODUCTS.map(p => ({name: p.name, price: p.price, category: p.category})))}.
    
    If someone asks for a product, find the best match and tell them the price. If we don't have it, politely inform them. Do not makeup products that are not in the catalog.`;

    const chatHistory = history.map((msg: any) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [...chatHistory, { role: 'user', parts: [{ text: message }]}],
      config: {
        systemInstruction,
      }
    });

    return NextResponse.json({ reply: response.text });
  } catch (error) {
    console.error('Error generating AI response:', error);
    return NextResponse.json(
      { reply: "I'm having a little trouble connecting right now. Please try again in a moment." },
      { status: 500 }
    );
  }
}
