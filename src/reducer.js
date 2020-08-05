export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    'BQCVtKT-KSkhBX3TYttFQibkJ6Up93hOsFV5_oTVu6KUJgM2Tr7GypQ3MW79yM1Dgc_VUqfF9Cmz4-t1DOuv7u5l7ecPQZhm9a8HhHWNTBXqtswy1pfQIvuzaDJvj9rFKOyZ18oRCOfErgmk8951FKd2XLEI1w',
  // token: null,
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
