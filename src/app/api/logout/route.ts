import { IRON_OPTIONS } from '@/lib/config/session';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await getIronSession<{ nonce: string }>(
    cookies(),
    IRON_OPTIONS
  );

  await session.destroy();

  // redirect("/");

  return NextResponse.json({ status: 200 });
}