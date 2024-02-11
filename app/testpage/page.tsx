import { Card, Title, Text } from '@tremor/react';
import Search from './components/search';
import UsersTable from './components/table';
import db from './components/db'; // Import the database configuration

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  banned: boolean;
}

export default async function BanlistPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  let users: User[] = [];

  try {
    // Use the Neon serverless connection to query the database
    const result = await db.query(`
      SELECT id, name, username, banned
      FROM users 
      WHERE name ILIKE $1;
    `, ['%' + search + '%']);
    users = result.rows as User[];
  } catch (error) {
    console.error("Error querying the database:", error);
  }

  return (
    <main className="p-4 my-16 md:p-10 mx-auto w-screen max-w-7xl">
      <Title>Banlist</Title>
      <Text>A list of all banned users retrieved from a Postgres database.</Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  );
}
