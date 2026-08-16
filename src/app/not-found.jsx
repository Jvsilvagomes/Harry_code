import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.badge}>Erro 404</span>
        <h1 className={styles.title}>404</h1>
        
        <h2 className={styles.subtitle}>Página não encontrada</h2>

        <p className={styles.description}>
          Vish! A página que você está procurando não existe, foi movida ou está temporariamente indisponível.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.button}>
            Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
}