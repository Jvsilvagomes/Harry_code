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

  const getCharKey = (char) => char.id || char.name;

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoritos');
    if (savedFavorites) {
      try {
        const parsed = JSON.parse(savedFavorites);
        setFavorites(parsed);
        console.log('📦 Favoritos recuperados do LocalStorage:', parsed.length);
      } catch (e) {
        console.error('Erro ao ler favoritos do LocalStorage', e);
      }
    }
  }, []);

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
    let updatedFavorites;

    if (isFav) {
      updatedFavorites = favorites.filter((fav) => fav.id !== char.id);
      toast.info(`${char.name} foi removido dos favoritos!`);
    } else {
      updatedFavorites = [...favorites, char];
      toast.success(`${char.name} foi adicionado aos favoritos!`);
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favoritos', JSON.stringify(updatedFavorites));

    console.log('💾 Dados salvos no LocalStorage');
    console.log('🔍 Veja em: F12 → Application → Local Storage → favoritos');
    console.log('✅ State atualizado com', updatedFavorites.length, 'favoritos');
  };

  if (loading) return <div className={styles.loading}>Carregando feitiços e bruxos...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.espacamentoGeral}>

        <h2 className={styles.tituloFavoritos}>
          ⭐ Favoritos ({favorites.length})
        </h2>

        {favorites.length === 0 ? (
          <p className={styles.emptyState}>Nenhum personagem favoritado ainda.</p>
        ) : (
          <div className={styles.grid}>
            {favorites.map((char) => {
              const charKey = getCharKey(char);
              return (
                <CharacterCard
                  key={`fav-${charKey}`}
                  character={char}
                  isFavorite={true}
                  onToggleFavorite={toggleFavorite}
                  onClick={() => setSelectedCharacter(char)}
                />
              );
            })}
          </div>
        )}

        <hr className={styles.divisor} />
        <h1 className={styles.titulo}>Personagens do Universo</h1>

        <div className={styles.grid}>
          {characters.map((char) => {
            const charKey = getCharKey(char);
            return (
              <CharacterCard
                key={charKey}
                character={char}
                isFavorite={favorites.some((fav) => getCharKey(fav) === charKey)}
                onToggleFavorite={toggleFavorite}
                onClick={() => setSelectedCharacter(char)}
              />
            );
          })}
        </div>

        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      </div>
    </div>
  );
}