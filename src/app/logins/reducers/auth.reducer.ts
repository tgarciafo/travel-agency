import { createReducer, on } from '@ngrx/store';
import { getUserLogin, getUserLoginSuccess, loginError, loginSuccess} from '../actions/auth.actions';
import { User } from '../../Models/user';
import { state } from '@angular/animations';

export const statusFeatureKey = 'status';

export interface AuthState {
  user: User | null;
}

export const initialState: AuthState = {
  user: null
};

export const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({ ...state, user })),
  on(getUserLogin, state => ({ ...state, user: null })),
    on(getUserLoginSuccess, (state, { user }) => ({
      ...state,
      user: { ...state, user }
  }))
  /* on(logout, () => initialState) */
);

export function authReducer(state, action) {
  return _authReducer(state, action);
}
/* export const getUser = (state: State) => state.user; */