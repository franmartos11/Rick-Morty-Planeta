import FollowingButtonComponent from 'features/following/button/following-button.component';
import React from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Character } from 'features/characters';
import { addCharacterToFollowingList, removeCharacterToFollowingList } from 'features/following/following.slices';

interface CardActionProps{
    id:number;
    character: Character;
}
const CardAction: React.FC<CardActionProps> = ({ id,character}) => {
    const followingIds = useAppSelector((state) => state.following.followingIds);
    const dispatch = useAppDispatch();
    const onToggleFavorite = (character: Character, setFav: boolean) => {
        if (setFav) {
          dispatch(addCharacterToFollowingList(character.id));
        } else {
          dispatch(removeCharacterToFollowingList(character.id));
        }
      };
  return (
        <FollowingButtonComponent
              isFav={followingIds.indexOf(id) >= 0}
              onToggleFavorite={(setFav) => onToggleFavorite(character, setFav)}
            />
  )
} 
export default CardAction;
