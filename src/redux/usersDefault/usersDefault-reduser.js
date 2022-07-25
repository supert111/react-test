import types from "./usersDefault-types" 

export default function defaultUser(state = {
    // contact: [  
    //     {id: '',  name: '', lastName: '', address: '', phone: '',},    
    // ],
    orders: [],
    total: 0,
}, {type, payload}) {
    switch (type) {
        case types.INCREMENTED:
            const orderCardQuantity = payload.map(findOrderQuantity => findOrderQuantity.orderQuantity + 1);
            payload.filter(changeQuantity => changeQuantity.orderQuantity = +orderCardQuantity);
            let newState = JSON.parse( JSON.stringify(state));
            const count = state.orders.map(({price, orderQuantity}) => price * orderQuantity)
            newState.total = count.reduce((a, b)=> a + b)
            return newState

        case types.DECREMENTED:
            const orderCardQuantityDecr = payload.map(findOrderQuantity => findOrderQuantity.orderQuantity - 1); 
            (payload.filter(changeQuantity => changeQuantity.orderQuantity = +orderCardQuantityDecr));
            let newStateDecr = JSON.parse( JSON.stringify(state));
            const countDec = state.orders.map(({price, orderQuantity}) => price * orderQuantity);
            newStateDecr.total = countDec.reduce((a, b)=> a + b)
            return newStateDecr

        case types.DELETED:
            const stateFilter = state.orders.filter(card => card.id !== payload[0].id);
            state.orders = stateFilter;
            let newStateDele = JSON.parse( JSON.stringify(state));
            return newStateDele

        default:
            return state
    }
};