import { filtredTitle } from "../Actions/actions"
import  data from "../Static/data"

const intialState = {
    filtredTitle : "",
    productList :data
}
export default function(state = intialState,action)
{
    switch(action.type)
    {
        case "FILTRED_TITLE":
        return {...state,filtredTitle:action.payload   }
        default:
        return state;
    }
}