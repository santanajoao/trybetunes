export const fetchAlbumsByArtist = async (artist) => {
  const treatedString = artist.replace(/ /g, '+');
  const endpoint = (
    'https://itunes.apple.com/search?entity=album'
    + `&term=${treatedString}&attribute=allArtistTerm`
  );
  const response = await fetch(endpoint);

  const { results } = await response.json();

  const albumsInfos = results.map(
    ({
      artistId,
      artistName,
      collectionId,
      collectionName,
      artworkUrl100,
    }) => ({
      artistId,
      artistName,
      collectionId,
      collectionName,
      artworkUrl100,
    }),
  );

  return albumsInfos;
};

export const fetchAlbumMusicsById = async (albumId) => {
  const endpoint = `https://itunes.apple.com/lookup?id=${albumId}&entity=song`;
  const response = await fetch(endpoint);
  const { results } = await response.json();
  return results;
};
