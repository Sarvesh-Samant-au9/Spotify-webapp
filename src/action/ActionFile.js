export const LoginAct = () => {
  const aToken = localStorage.getItem("logintoken");

  const output = fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${aToken}`,
    },
  }).then((response) => response.json());

  return {
    type: "LOGIN_ACTION",
    payload: output,
  };
};

export const GetCategory = () => {
  const aToken = localStorage.getItem("logintoken");
  const output = fetch(
    "https://api.spotify.com/v1/browse/categories?locale=IN",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${aToken}`,
      },
    }
  ).then((response) => response.json());

  return {
    type: "SHOW_CATEGORIES",
    payload: output,
  };
};

export const GetPlayListAccordingToCategory = (val) => {
  const aToken = localStorage.getItem("logintoken");
  const output = fetch(
    `https://api.spotify.com/v1/browse/categories/${val}/playlists?country=IN&limit=20`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${aToken}`,
      },
    }
  ).then((response) => response.json());

  return {
    type: "SHOW_PLAYLIST_WRT_CATEGORY",
    payload: output,
  };
};

export const GetPlaylistTracks = (selectedPlaylistID) => {
  const aToken = localStorage.getItem("logintoken");
  const output = fetch(
    `https://api.spotify.com/v1/playlists/${selectedPlaylistID}/tracks?limit=30`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${aToken}`,
      },
    }
  ).then((response) => response.json());

  return {
    type: "SHOW_PLAYLIST_TRACKS",
    payload: output,
  };
};
export const GetEditorsPick = () => {
  const aToken = localStorage.getItem("logintoken");
  const output = fetch(
    "https://api.spotify.com/v1/browse/featured-playlists?country=IN",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${aToken}`,
      },
    }
  ).then((response) => response.json());

  return {
    type: "EDITORS_PICK",
    payload: output,
  };
};
export const GetNewRelease = () => {
  const aToken = localStorage.getItem("logintoken");
  const output = fetch(
    "https://api.spotify.com/v1/browse/new-releases?country=IN&limit=4",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${aToken}`,
      },
    }
  ).then((response) => response.json());

  return {
    type: "SHOW_NEW_RELEASE",
    payload: output,
  };
};

export const GetFeatured = () => {
  const aToken = localStorage.getItem("logintoken");
  const output = fetch(
    "https://api.spotify.com/v1/browse/new-releases?country=IN&limit=50",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${aToken}`,
      },
    }
  ).then((response) => response.json());

  return {
    type: "SHOW_FEATURED",
    payload: output,
  };
};

export const GetFeaturedTracks = (selectedAlbumsID) => {
  const aToken = localStorage.getItem("logintoken");
  const output = fetch(
    `https://api.spotify.com/v1/albums/${selectedAlbumsID}/tracks?limit=30`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${aToken}`,
      },
    }
  ).then((response) => response.json());

  return {
    type: "SHOW_FEATURED_TRACK",
    payload: output,
  };
};

export const GetSearchResult = (searchTerm) => {
  const aToken = localStorage.getItem("logintoken");
  const val = searchTerm ? searchTerm : "justin";
  const output = fetch(
    `https://api.spotify.com/v1/search?query=${encodeURIComponent(
      val
    )}&type=track`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${aToken}`,
      },
    }
  ).then((response) => response.json());

  return {
    type: "SEARCH",
    payload: output,
  };
};
export const userPlaylist = () => {
  const aToken = localStorage.getItem("logintoken");
  const output = fetch(`https://api.spotify.com/v1/me/playlists`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${aToken}`,
    },
  }).then((response) => response.json());

  return {
    type: "USER_PLAYLIST",
    payload: output,
  };
};

export const recentlyPlayed = () => {
  const aToken = localStorage.getItem("logintoken");
  const output = fetch(
    `https://api.spotify.com/v1/me/player/recently-played?limit=20`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${aToken}`,
      },
    }
  ).then((response) => response.json());

  return {
    type: "RECENTLY_PLAYED",
    payload: output,
  };
};
export const action_track_id = (id) => {
  return {
    type: "SET_TRACK_ID",
    payload: id,
  };
};
