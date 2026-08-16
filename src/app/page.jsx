import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center text-center gap-8 py-10">
      <div className="relative w-full max-w-3xl h-64 md:h-80 rounded-2xl overflow-hidden border border-amber-500/30">
        <Image
          src="https://hp-api.onrender.com/images/hogwarts.jpg"
          alt="Hogwarts Castle"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end justify-center p-6">
          <h1 className="text-4xl font-extrabold text-amber-400 drop-shadow-md">Bem-vindo à WizardDex</h1>
        </div>
      </div>

      <p className="max-w-2xl text-slate-300 text-lg leading-relaxed">
        A enciclopédia digital oficial desenvolvida para o Ministério da Magia.
        Explore informações sobre os bruxos de Hogwarts, suas casas, patronos e detalhes mágicos.
      </p>

      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl max-w-xl w-full">
        <h2 className="text-xl font-bold text-amber-400 mb-3">Tecnologias Utilizadas</h2>
        <ul className="flex flex-wrap gap-2 justify-center text-sm text-slate-300">
          <li className="bg-slate-800 px-3 py-1 rounded-md">Next.js 16</li>
          <li className="bg-slate-800 px-3 py-1 rounded-md">React 19</li>
          <li className="bg-slate-800 px-3 py-1 rounded-md">Axios</li>
          <li className="bg-slate-800 px-3 py-1 rounded-md">Tailwind CSS</li>
          <li className="bg-slate-800 px-3 py-1 rounded-md">React Toastify</li>
        </ul>
      </div>

      <Link
        href="/personagens"
        className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl transition shadow-lg"
      >
        Ver Personagens
      </Link>
    </div>
    );
}