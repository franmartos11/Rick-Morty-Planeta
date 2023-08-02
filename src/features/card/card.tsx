import React from 'react'
import CardPicture from './CardPicture'
import CardContent from './CardContent'
import CardAction from './CardAction';
import { Character } from 'features/characters';

interface CardProps{

    id:number;
    imageUrl:string;
    name:string;
    character: Character;
}
const card: React.FC<CardProps>=({id,name,imageUrl,character})=> {
  return (
    <div  className='card' >
        <CardPicture imageUrl={imageUrl} alt={name}></CardPicture>
        <div className='card-body'>
            <CardContent name={name}></CardContent>
            <CardAction id={id} character={character} ></CardAction>
        </div>
    </div>
  )
}

export default card