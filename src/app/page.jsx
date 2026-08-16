import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.bannerWrapper}>
        <Image
          src="/images/banner-wizardDex.png"
          alt="Hogwarts Castle"
          fill
          className={styles.imagemBanner}
          priority
        />
        <div className={styles.overlayBanner}>
          <h1 className={styles.tituloPrincipal}>Bem-vindo à WizardDex</h1>
        </div>
      </div>

      <p className={styles.descricao}>
        A enciclopédia digital oficial desenvolvida para o Ministério da Magia.
        Explore informações sobre os bruxos de Hogwarts, suas casas, patronos e detalhes mágicos.
      </p>

      <div className={styles.cardTechs}>
        <h2 className={styles.tituloSecundario}>Tecnologias Utilizadas</h2>
        <ul className={styles.listaTechs}>
          <li className={styles.itemTech}>Next.js 16</li>
          <li className={styles.itemTech}>React 19</li>
          <li className={styles.itemTech}>Axios</li>
          <li className={styles.itemTech}>React Toastify</li>
        </ul>
      </div>

      <Link href="/personagens" className={styles.botaoLink}>
        Ver Personagens
      </Link>
    </div>
  );
}