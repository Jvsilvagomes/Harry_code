import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="bg-slate-900 border-b border-amber-500/30 px-6 py-4 flex justify-between items-center shadow-lg">
      <Link href="/" className="flex items-center gap-2">
        <Image src="https://hp-api.onrender.com/images/harry.jpg" alt="WizardDex Logo" width={32} height={32} className="rounded-full" />
        <span className="text-xl font-bold tracking-wider text-amber-400">WizardDex</span>
      </Link>
      <nav className="flex gap-6 font-medium text-slate-300">
        <Link href="/" className="hover:text-amber-400 transition">Home</Link>
        <Link href="/personagens" className="hover:text-amber-400 transition">Personagens</Link>
        <Link href="/sobre" className="hover:text-amber-400 transition">Sobre</Link>
      </nav>
    </header>
    );
}