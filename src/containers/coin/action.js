export const getPromotedCoins = () => ({
    type: 'GET_PROMOTED_COINS',
  });

  export const getPromotedCoinsResult = (success, payload) => ({
    type: success ?  'GET_PROMOTED_COINS_SUCCESS' : 'GET_PROMOTED_COINS_FAILURE', payload
  });
  
  