import { FC } from 'react';
import { useGetCharactersQuery } from 'features/characters/characters.endpoints';
import Card from 'features/card/card';

export type CharactersComponentProps = {
  rickIDDS: number[];
};

const CharactersComponent: FC<CharactersComponentProps> = ({ rickIDDS }: CharactersComponentProps) => {
  const { data: characters, error, isLoading } = useGetCharactersQuery( { ids: rickIDDS } );
  
  if (isLoading) return <div>Loading characters...</div>;
  if (error || !characters) return <div>Error when loading. Please try again later.</div>;
  const charactersArray = Array.isArray(characters) ? characters : [characters];


  return (
    <div className={'characters'}>
      {charactersArray.map((character) => (
        <Card key={character.id} id={character.id} name={character.name} imageUrl={character.image} character={character} ></Card>
      ))}
    </div>
  );
};

export default CharactersComponent;
