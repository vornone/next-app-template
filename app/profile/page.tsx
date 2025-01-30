import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

export default async function Profile() {
  const session = await getSession();
  if (!session) {
    redirect('/api/auth/login');
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {session.user.name}!</p>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
}