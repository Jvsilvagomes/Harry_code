import styles from './Sobre.module.css';

export default function Sobre() {
  const grupo = ['Rafael', 'João Victor'];

  return (
    <div className={styles.container}>
      <h1 className={styles.tituloPrincipal}>Sobre o Projeto</h1>

      <div className={`${styles.card} ${styles.cardEspacado}`}>
        <p><strong>Curso:</strong> Desenvolvimento de Sistemas - Front-end </p>
        <p><strong>Turma:</strong> 2TDS1</p>
        <p><strong>Professores:</strong> Thiago e Marcelo</p>
      </div>

      <div className={styles.card}>
        <h2 className={styles.tituloSecundario}>Integrantes do Grupo</h2>
        <ul className={styles.lista}>
          {grupo.map((nome, index) => (
            <li key={index}>{nome}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}