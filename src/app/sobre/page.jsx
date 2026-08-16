export default function Sobre() {
  const grupo = ['Nome do Integrante 1', 'Nome do Integrante 2', 'Nome do Integrante 3'];

  return (
    <div className="max-w-2xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold text-amber-400 border-b border-amber-500/30 pb-3">Sobre o Projeto</h1>

      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-3">
        <p><strong>Curso:</strong> Desenvolvimento Front-end</p>
        <p><strong>Turma:</strong> 2026/1</p>
        <p><strong>Professores:</strong> Nome dos Professores</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
        <h2 className="text-xl font-bold text-amber-300 mb-4">Integrantes do Grupo</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          {grupo.map((nome, index) => (
            <li key={index}>{nome}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}