import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// Hook personalizado
export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoritesContext)

  function addFavorite(newFavorite) {
    const itemExists = favorite.some(item => item.id === newFavorite.id)
    const newList = itemExists
      ? favorite.filter(fav => fav.id !== newFavorite.id)
      : [...favorite, newFavorite]
    setFavorite(newList)
  }

  return { favorite, addFavorite }
}
