export function getDatabaseUrl() {
  const user = process.env.POSTGRES_USER;
  const password = process.env.POSTGRES_PASSWORD;
  const dbName = process.env.POSTGRES_DB;
  const port = process.env.POSTGRES_PORT;
  const host = process.env.POSTGRES_HOST;

  if (!user || !password || !dbName || !port || !host) {
    throw new Error(
      "Erreur les variables d'environnement de la Base de données ne sont pas définie",
    );
  }
  const DATABASE_URL = `postgresql://${user}:${password}@${host}:${port}/${dbName}`;

  return DATABASE_URL;
}
