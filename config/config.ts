// config.ts
const config = {
  postgreSQL: {
    host: process.env.POSTGRES_HOST || "",
    port: parseInt(process.env.POSTGRES_PORT || "5432"),
    user: process.env.POSTGRES_USER || "",
    password: process.env.POSTGRES_PASSWORD || "",
    database: process.env.POSTGRES_DATABASE || "",
  },
} as const;

export default config;
