import React from 'react'

interface CardPictureProps{
    imageUrl:string;
    alt:string;
}

const CardPicture : React.FC<CardPictureProps>=({imageUrl,alt})=> {
  return (
    <div className={"card-image"}>
            <img alt={alt} src={imageUrl} />
          </div>
  )
}

export default CardPicture
