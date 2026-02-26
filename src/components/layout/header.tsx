import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-neutral-300 shadow-sm">
      <h1 className="text-xl font-bold text-gray-800 tracking-tight">
        AppComics
      </h1>
      <div className="flex gap-8">
        <Link
          href="/"
          className="text-sm font-bold text-blue-600  hover:text-black transition-colors duration-200"
        >
          Accueil
        </Link>
        <Link
          href=""
          className="text-sm font-bold text-blue-600 hover:text-black transition-colors duration-200"
        >
          Liste de Comics
        </Link>
        <Link
          href="/add-comics"
          className="text-sm font-bold text-blue-600 hover:text-black transition-colors duration-200"
        >
          Ajoute de Comics
        </Link>
      </div>
    </nav>
  );
}
