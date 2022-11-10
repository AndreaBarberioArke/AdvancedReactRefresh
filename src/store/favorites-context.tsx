import React from "react";
import { useState } from "react";
interface MeetupContext {
  favorites?: [];
  totalFavorites: number;
}
interface Props {
  children: React.ReactNode;
}

export const FavoritesContext = React.createContext<MeetupContext | any>({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup:any) =>{},
  removeFavorite: (meetupId:number) =>{},
  itemIsFavorite: (favoriteMeetup:boolean) =>{}
});

export const FavoritesContextProvider: React.FC<Props> = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState<string[]>([]);
  function addFavoriteHandler(favoriteMeetup: any) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId: number) {
    setUserFavorites((prevUserFavorites: string[]) => {
      return prevUserFavorites.filter((meetup: any) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId:  number) {
    return userFavorites.some((meetup: any) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites?.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesContext;
