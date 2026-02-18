import { pgTable, bigserial, text } from "drizzle-orm/pg-core";

export const comics = pgTable("comics", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  imgUrl: text("img_url"), // nullable
});
