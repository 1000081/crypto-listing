// import { combineReducers } from "redux";

const coinReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PROMOTED_COINS':
            return { ...state, loading: true };
        case 'GET_PROMOTED_COINS_SUCCESS':
            return { ...state, 
                promotedCoins: filteredList(action.payload, 'P'),
                allTimeBestCoins: filteredList(action.payload, 'ATB'),
                normalCoins: filteredList(action.payload, 'NOR'),
                preSaleCoins: filteredList(action.payload, 'PRE'),
                newCoins: filteredList(action.payload, 'NEW'),
                loading: false 
            }
        case 'GET_PROMOTED_COINS_FAILURE':
            return { ...state, coins: action.payload, loading: false }  
      default:
        return state;
    }
  };


  const filteredList = (coinList, coinType) => {
    const results = coinList.filter((coin) => {
        return (coin.coinType === coinType);
        // Use the toLowerCase() method to make it case-insensitive
      });
      return results
  }

  export default coinReducer;

  
  