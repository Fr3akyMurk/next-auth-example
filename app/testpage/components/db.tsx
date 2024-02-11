import { Pool } from 'pg';

// Create a new pool using the connection string from your .env.local
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default {
  query: (text, params) => pool.query(text, params),
};
