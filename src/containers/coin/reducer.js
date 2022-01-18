import * as types from "../../components/action-types";
import moment from "moment";

const coinReducer = (state = {}, action) => {
    switch (action.type) {
        case types.GET_PROMOTED_COINS:
            return { ...state, loading: true };

        case  types.GET_PROMOTED_COINS_SUCCESS:
            return {
                ...state,
                promotedCoins: filteredList(action.payload, types.COIN_TYPE_PROMOTED),
                allTimeBestCoins: filteredList(action.payload, types.COIN_TYPE_ATB),
                normalCoins: filteredList(action.payload, types.COIN_TYPE_NORMAL),
                preSaleCoins: filteredList(action.payload, types.COIN_TYPE_PRE_SALE),
                newCoins: filteredList(action.payload, types.COIN_TYPE_NEW),
                coinCollections: action.payload,
                voteCount: 'AA',
                loading: false
            }

        case  types.GET_PROMOTED_COINS_FAILURE:
            return { ...state, coins: action.payload, loading: false }

        case  types.ADD_COINS:
            return { ...state, payload: action.payload, loading: false }

        case  types.ADD_COINS_SUCCESS:
            return { ...state, payload: action.payload, loading: false }

        case  types.ADD_COINS_FAILURE:
            return { ...state, payload: action.payload, loading: false }

        case  types.UPDATE_COINS:
            return { ...state, 
                payload: action.payload, 
                id: action.id, 
                loading: false
            }

        case  types.UPDATE_COINS_SUCCESS:
            return { ...state, payload: action.payload, voteCount: 'UU'}

        case  types.UPDATE_COINS_FAILURE:
            return { ...state, payload: action.payload, voteCount: 'UU' }     

        case  types.POPULATE_COINS_DETAILS:
            return { ...state, 
                payload: action.payload
            }
    
        
        default:
            return state;
    }
};


const filteredList = (coinList, coinType) => {
    const results = coinList.filter((coin) => {
        coin.launchDt = '6';
        var gmtDateTime = moment.utc(coin.listedDt);
        var local = gmtDateTime.local().format('YYYY-MM-DD h:mm A');
        coin.listedDt = local;
        return (coin.coinType === coinType);
    });
    return results
}

export default coinReducer;


