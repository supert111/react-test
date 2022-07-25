import types from './productCards-types';

export default function products (state = {
  cards: [  
    {id: 'id-1',  url: '', text: 'the best product', price: '2', orderQuantity: 0, buttonAdd: false,},
    {id: 'id-2',  url: '', text: 'the best product', price: '12', orderQuantity: 0, buttonAdd: false,},
    {id: 'id-3',  url: '', text: 'the best product', price: '25', orderQuantity: 0, buttonAdd: false,},
    {id: 'id-4',  url: '', text: 'the best product', price: '50', orderQuantity: 0, buttonAdd: false,},
    {id: 'id-5',  url: '', text: 'the best product', price: '200', orderQuantity: 0, buttonAdd: false,},
    {id: 'id-6',  url: '', text: 'the best product', price: '4', orderQuantity: 0, buttonAdd: false,},
  ]
}, {type, payload}) {

  if (type === types.ADD_PRODUCT_TO_CART) {
    state.cards.filter(card => {
      if(card === payload) return card.buttonAdd = true;
      return card
    }) 
  }

  if (type === types.BUTTON_RESET) {
    state.cards.filter(card => {
      if(card.id === payload.id) {
        card.buttonAdd = false;
        card.orderQuantity = 0;
        return card;
      } 
      return card
    }) 
  }

  return state
};