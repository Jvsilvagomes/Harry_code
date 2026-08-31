'use client';

import Image from 'next/image';
import { Heart } from 'lucide-react';
import styles from './CharacterCard.module.css';

export default function CharacterCard({ character, isFavorite, onToggleFavorite, onClick }) {
  const houseClassName = {
    Gryffindor: styles.gryffindor,
    Slytherin: styles.slytherin,
    Hufflepuff: styles.hufflepuff,
    Ravenclaw: styles.ravenclaw,
  }[character.house] || styles.defaultHouse;

  return (
    <div className={`${styles.card} ${houseClassName}`}>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onToggleFavorite(character);
        }}
        className={styles.favoriteButton}
        aria-label="Favoritar personagem"
      >
        <Heart
          className={`${styles.heartIcon} ${
            isFavorite ? styles.favoriteActive : styles.favoriteInactive
          }`}
        />
      </button>

      <div onClick={onClick} className={styles.cardContent}>
        <div className={styles.imageContainer}>
          <Image
            src={character.image || 'https://via.placeholder.com/150'}
            alt={character.name}
            fill
            className={styles.characterImage}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <h3 className={styles.characterName}>{character.name}</h3>
        <p className={styles.characterHouse}>{character.house || 'Sem Casa'}</p>
        <p className={styles.characterActor}>Ator: {character.actor || 'N/A'}</p>
      </div>
    </div>
  );
}