import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoContainer}>
        <Image 
          src="https://hp-api.onrender.com/images/harry.jpg" 
          alt="WizardDex Logo" 
          width={32} 
          height={32} 
          className={styles.logoImagem} 
        />
        <span className={styles.logoTexto}>WizardDex</span>
      </Link>
      
      <nav className={styles.navegacao}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/personagens" className={styles.link}>Personagens</Link>
        <Link href="/sobre" className={styles.link}>Sobre</Link>
      </nav>
    </header>
  );
}