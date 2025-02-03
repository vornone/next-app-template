import pool from '@/lib/db';

export default async function Dashboard() {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT * FROM grc_user');
    const users = res.rows;
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.user_id}>{user.user_name}</li>
          ))}
        </ul>
      </div>
    );
  } finally {
    client.release();
  }
}