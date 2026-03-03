import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-lg font-semibold tracking-tight text-white">
          AppComics
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Accueil
          </Link>

          <Link
            href="/list-comics"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Liste
          </Link>

          <Link
            href="/add-comics"
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            Ajouter
          </Link>
        </div>
      </nav>
    </header>
  );
}
