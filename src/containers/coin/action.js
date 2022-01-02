
import * as types from "../../components/action-types";

export const getPromotedCoins = () => ({
    type: types.GET_PROMOTED_COINS,
  });

  export const getPromotedCoinsResult = (success, payload) => ({
    type: success ?  types.GET_PROMOTED_COINS_SUCCESS : types.GET_PROMOTED_COINS_FAILURE, payload
  });
  
  export const addCoins = (payload) => ({
    type: types.ADD_COINS,
    payload
  });

  export const addCoinsResult = (success, payload) => ({
    type: success ?  types.ADD_COINS_SUCCESS : types.ADD_COINS_FAILURE, payload
  });

  export const updateCoin = (payload, id) => ({
    type: types.UPDATE_COINS,
    payload,
    id
  });

  export const updateCoinsResult = (success, payload) => ({
    type: success ?  types.UPDATE_COINS_SUCCESS : types.UPDATE_COINS_FAILURE, payload
  });


  