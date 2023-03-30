import defaultImage from '../assets/profile-icon.svg';

const RESPONSE_TIME = 250;

export const saveUserInfos = (infos) => (
  new Promise((resolve) => {
    setTimeout(() => {
      const userInfos = {
        description: '',
        email: '',
        image: defaultImage,
        ...infos,
      };
      const userInfosJSON = JSON.stringify(userInfos);
      localStorage.setItem('userInfos', userInfosJSON);

      if (Object.keys(infos).length === 1) {
        localStorage.setItem('favoriteSongs', '[]');
      }

      resolve(true);
    }, RESPONSE_TIME);
  })
);

export const getUserInfos = () => (
  new Promise((resolve) => {
    setTimeout(() => {
      const userInfosJSON = localStorage.getItem('userInfos');
      const userInfos = JSON.parse(userInfosJSON);
      resolve(userInfos);
    }, RESPONSE_TIME);
  })
);

export const getFavoriteSongs = async () => (
  new Promise((resolve) => {
    setTimeout(() => {
      const favoritesJSON = localStorage.getItem('favoriteSongs');
      let favorites = JSON.parse(favoritesJSON);

      if (!favorites) {
        favorites = [];
        localStorage.setItem('favoriteSongs', '[]');
      }

      resolve(favorites);
    }, RESPONSE_TIME);
  })
);

export const removeFavoriteSong = async (songObject) => {
  let favorites = await getFavoriteSongs();
  favorites = favorites.filter(({ trackId }) => trackId !== songObject.trackId);

  const favoritesJSON = JSON.stringify(favorites);
  localStorage.setItem('favoriteSongs', favoritesJSON);
};

export const addFavoriteSong = async (songObject) => {
  let favorites = await getFavoriteSongs();
  favorites = [...favorites, songObject];

  const favoritesJSON = JSON.stringify(favorites);
  localStorage.setItem('favoriteSongs', favoritesJSON);
};
