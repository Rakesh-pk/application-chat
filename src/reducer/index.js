//importing action types
import { ADD_CONTACTS,FILTER_CONTACTS,SEND_MESSAGE} from "../action/actionTypes";

//giving initial state to the store
const initialState={
    contacts:[],
    loggedInUser:{
        name:'Rakesh Pk',
        id:0,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFOWKml0v8J94mCnyTy6nFv2-u1nFV_upI_yavQSc&s",
        phoneNo:"7022361367"
    }
}

//changing store state on the basis of action type
export default function rootReducer(state=initialState,action){
    switch(action.type){
        case ADD_CONTACTS:{
            return{
                ...state,
                contacts:action.contacts
            }
        }
        case FILTER_CONTACTS:{
            return{
                ...state,
                contacts:action.contacts
            }
        }
        case SEND_MESSAGE:{
            const newObj={
                message:action.message,
                sender:"self",
                timestamps:action.timestamps
            }
            const cont=state.contacts.map(contact => ({...contact}));
            console.log(".lk[kpoom",cont[action.user.id-1]);
            cont[action.user.id-1].chats.push(newObj);
            return{
                ...state,
                contacts:cont
            }
        }
        default:
            return state;
    }
}