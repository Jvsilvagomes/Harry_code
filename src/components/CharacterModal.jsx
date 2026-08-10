'use client';
import Image from 'next/image';
import { X } from 'lucide-react';
import styles from './CharacterModal.module.css';

export default function CharacterModal({ character, onClose }) {
  if (!character) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContent}>
        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Fechar modal"
        >
          <X className={styles.closeIcon} />
        </button>

        <div className={styles.modalBody}>
          <div className={styles.imageContainer}>
            <Image
              src={character.image || 'https://via.placeholder.com/150'}
              alt={character.name}
              fill
              className={styles.characterImage}
            />
          </div>

          <h2 className={styles.characterName}>{character.name}</h2>
          <span className={styles.houseBadge}>
            {character.house || 'Desconhecido'}
          </span>

          <div className={styles.detailsGrid}>
            <p><strong>Espécie:</strong> {character.species || 'N/A'}</p>
            <p><strong>Patrono:</strong> {character.patronus || 'N/A'}</p>
            <p><strong>Nascimento:</strong> {character.dateOfBirth || 'N/A'}</p>
            <p><strong>Olhos:</strong> {character.eyeColour || 'N/A'}</p>
            <p><strong>Cabelo:</strong> {character.hairColour || 'N/A'}</p>
            <p><strong>Ator:</strong> {character.actor || 'N/A'}</p>
            <p className={styles.fullWidthDetail}>
              <strong>Situação:</strong> {character.alive ? '🟢 Vivo' : '🔴 Morto'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}