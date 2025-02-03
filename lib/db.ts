import { Pool } from "pg";
import fs from "fs";
import path from "path";

// Load the SSL certificate
const sslCertPath = path.resolve(process.cwd(), "global-bundle.pem");
let sslCert;
try {
  sslCert = fs.readFileSync(sslCertPath, "utf8");
} catch (err: any) {
  console.error("Failed to load SSL certificate:", err.message);
  process.exit(1);
}

const dbConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 5432,
  ssl: {
    rejectUnauthorized: true,
    ca: sslCert,
  },
};

const pool = new Pool(dbConfig);

export default pool;