export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    'BQBPX6YuJUZ2YyK9tFOCKgNIcNTUhhxJymTolEwqwDIiZabf3RgpPvMo1Z35hh0xrLFxLhdH6qN6aaNLoxL0DqEOmA-blfDbsfLe5Mx7VPQlq2cc3fKJL9U2oF1O2wqzTjZ_KvYnurlb0O2jtYEaUxfNaOM39A',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
