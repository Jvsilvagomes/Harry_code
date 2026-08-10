'use client';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import styles from './CharacterCard.module.css';

export default function CharacterCard({ character, isFavorite, onToggleFavorite, onClick }) {
    const houseStyles = {
        Gryffindor: styles.gryffindor,
        Slytherin: styles.slytherin,
        Hufflepuff: styles.hufflepuff,
        Ravenclaw: styles.ravenclaw,
    };

    const houseClass = houseStyles[character.house] || styles.defaultHouse;

    return (
        <div className={`${styles.card} ${houseClass}`}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(character);
        }}
        className={styles.favoriteButton}
        aria-label="Favoritar"
      >
        <Heart
          className={`${styles.heartIcon} ${isFavorite ? styles.favoriteActive : styles.favoriteInactive}`}
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
    </ div>
);
}