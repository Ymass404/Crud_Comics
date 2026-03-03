import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-5xl items-center px-6">
        <section className="w-full max-w-xl">
          {/* small badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Comics CRUD
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight">
            Gère ta collection de comics.
          </h1>

          <p className="mt-3 text-zinc-400">
            Ajoute, modifie et supprime tes comics avec une interface simple et
            rapide.
          </p>
        </section>
      </div>
    </main>
  );
}
