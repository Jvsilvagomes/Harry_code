"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './navbar.module.css';

export default function Navbar() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const nextTheme = savedTheme || systemTheme;

    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  }, []);

  function changeTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    window.localStorage.setItem('theme', nextTheme);
  }

  const isDarkMode = theme === 'dark';

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoContainer}>
        <Image
          src="/images/logo-wizardDex.png"
          alt="WizardDex Logo"
          width={32}
          height={32}
          className={styles.logoImagem}
        />
        <span className={styles.logoTexto}>WizardDex</span>
      </Link>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.themeToggle}
          onClick={changeTheme}
          aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
          title={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
        >
          <Image
            src={isDarkMode ? '/images/sol.webp' : '/images/lua.png'}
            alt={isDarkMode ? 'Ícone do sol' : 'Ícone da lua'}
            width={22}
            height={22}
            className={styles.themeIcon}
          />
        </button>

        <nav className={styles.navegacao}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/personagens" className={styles.link}>Personagens</Link>
          <Link href="/sobre" className={styles.link}>Sobre</Link>
        </nav>
      </div>
    </header>
  );
}