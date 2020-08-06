export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  playlist_view: null,
  // token:
  //   'BQDWpTisiZS1aqjQZFVOVVoZGzJGgZEmarqsjbGXBbXVxbtwa3OrsL60EN4WzSsEDkHnR3CxYxCbbFzSd5gW5JMbFvDl_VSuz6VLOuYelUEyos_knU0onDpDryjk7nwkkYZW-WSS4ygCbiCSEEis8DNz2PjRZQ',
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

    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      }; 

    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case 'SET_TOP_ARTISTS':
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_SPOTIFY':
      return {
        ...state,
        spotify: action.spotify,
      };

      case 'SET_PLAYLISTS':
        return {
          ...state,
          playlists: action.playlists,
        };
        case 'SET_PLAYLIST_VIEW':
          return {
            ...state,
            playlist_view: action.playlist_view,
          };
    default:
      return state;
  }
};

export default reducer;
