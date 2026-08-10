import Link from "next/link";
import Image from "next/image";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.badge}>Erro 404</div>
          <h1 className={styles.title}>Página não encontrada</h1>
          <p className={styles.description}>
            Ops! A página que você está procurando não existe, foi removida ou mudou de endereço.
          </p>

          <Link href="/" className={styles.button}>
            Voltar para a Home
          </Link>
        </div>
      </div>
    </main>
  );
}