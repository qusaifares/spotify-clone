export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   'BQBVJ1-cctnHtpUSpyu-gkjsts2VIx4Lz_G5P9YyXl7ATbwCY30xn_HvZkoz_pnVLhh33wW9TF193L7RZ0kpYt3kz0UvX630O4pvopZUC1LbB8gIbGaivjV47hBFgptOPki5q_IHR5YflUgGc4NwxjiLTZx6Pg',
  token: null,
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
