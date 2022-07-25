import types from "./users-types";
import { getDatabase, ref, set } from "firebase/database";

function writeUserData(orders, total, contact, phone) {
    const db = getDatabase();
    set(ref(db, 'users/' + phone), {
      contact, 
      order:[...orders], 
      total
    });
  }

export default function users(state = []

, {type, payload}) {
    if (type === types.ORDERED) {
        const {contact, orders, total, phone} = payload;
        const structureState = {[phone]: {contact, order:[...orders], total}}
        state.push(structureState)
        writeUserData(orders, total, contact, phone)
        return state;
    }
    return state;
}