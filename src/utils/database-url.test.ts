import { it, describe, expect } from "vitest";
import { getDatabaseUrl } from "./database-url";

describe("URL environnement variable", () => {
  it("Doit récupérer l'URL de la base de donnée", () => {
    const url = getDatabaseUrl();
    const user = process.env.POSTGRES_USER;
    const password = process.env.POSTGRES_PASSWORD;
    const dbName = process.env.POSTGRES_DB;
    const port = process.env.POSTGRES_PORT;
    const host = process.env.POSTGRES_HOST;
    const expectedResult = `postgresql://${user}:${password}@${host}:${port}/${dbName}`;
    expect(url).toBe(expectedResult);
  });

  it("Doit renvoyer une erreur si les variables d'environnement ne sont pas définie", () => {
    process.env.POSTGRES_USER = "";
    expect(() => getDatabaseUrl()).toThrow(
      "Erreur les variables d'environnement de la Base de données ne sont pas définie",
    );
  });
});
