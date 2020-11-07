import { IAction, IAuthState } from "../../interfaces/redux.interfaces"
import { LOGIN, LOGOUT, REGISTER, SET_LOGIN_ERROR, SET_LOGIN_LOADING, SET_LOGOUT_ERROR, SET_LOGOUT_LOADING, SET_REGISTER_ERROR, SET_REGISTER_LOADING,  } from "../types/auth.types"

const initialState: IAuthState = { authorized: false, token: null, loading: false, error: null }

export const authReducer = (state: IAuthState = initialState, { type, payload }: IAction): IAuthState => {
  switch (type) {
    case REGISTER: return state
    case LOGIN: return { ...state, authorized: true, token: payload }
    case LOGOUT: return { ...state, authorized: false, token: null }
    case SET_LOGIN_LOADING: 
    case SET_LOGOUT_LOADING: 
    case SET_REGISTER_LOADING: return { ...state, loading: payload }
    case SET_LOGIN_ERROR: 
    case SET_LOGOUT_ERROR: 
    case SET_REGISTER_ERROR: return { ...state, error: payload }
    default: return state
  }
}