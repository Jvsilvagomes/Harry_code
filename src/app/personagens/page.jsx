'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import CharacterCard from '@/components/CharacterCard';
import CharacterModal from '@/components/CharacterModal';
import styles from './Personagens.module.css';

export default function Personagens() {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        setLoading(true);
        const response = await axios.get('https://hp-api.onrender.com/api/characters');
        setCharacters(response.data);
      } catch (err) {
        setError('Erro ao carregar dados da API.');
        toast.error('Ocorreu um erro ao buscar os personagens!');
      } finally {
        setLoading(false);
      }
    }

    fetchCharacters();
  }, []);

  const toggleFavorite = (char) => {
    const isFav = favorites.some((fav) => fav.id === char.id);

    if (isFav) {
      setFavorites(favorites.filter((fav) => fav.id !== char.id));
      toast.info(`${char.name} foi removido dos favoritos!`);
    } else {
      setFavorites([...favorites, char]);
      toast.success(`${char.name} foi adicionado aos favoritos!`);
    }
  };

  if (loading) return <div className={styles.loading}>Carregando feitiços e bruxos...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.espacamentoGeral}>
        <h1 className={styles.titulo}>Personagens do Universo</h1>

        <div className={styles.grid}>
          {characters.map((char) => (
            <CharacterCard
              key={char.id || char.name}
              character={char}
              isFavorite={favorites.some((fav) => fav.id === char.id)}
              onToggleFavorite={toggleFavorite}
              onClick={() => setSelectedCharacter(char)}
            />
          ))}
        </div>

        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      </div>
    </div>
  );
}