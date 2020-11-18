import { createReducer, on } from '@ngrx/store';
import { User } from '../../Models/user';
import { getLogin} from '../actions/login.actions';

export interface UserState{
    users: User[];
    loading: boolean;
    loaded: boolean;
    error: any;
}

export const initialState: UserState = {
    users: [new User()],
    loading: false,
    loaded: false,
    error: null
};

const _loginReducer = createReducer(
    initialState,
    on(getLogin, (state) => ({
        ...state,
        loading: false,
        loaded: false,
    }))
    
)

export function loginReducer(state, action) {
    return _loginReducer(state, action);
}