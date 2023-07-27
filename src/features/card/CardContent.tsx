import React from 'react'

interface CardContentProps{
    name:string;
}
const CardContent: React.FC<CardContentProps>= ({name}) => {
  return (
    <span>{name}</span>
  )
}

export default CardContent;