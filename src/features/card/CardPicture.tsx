import React from 'react'

interface CardPictureProps{
    imageUrl:string;
}

const CardPicture : React.FC<CardPictureProps>=({imageUrl})=> {
  return (
    <div className={"card-image"}>
            <img src={imageUrl} />
          </div>
  )
}

export default CardPicture
