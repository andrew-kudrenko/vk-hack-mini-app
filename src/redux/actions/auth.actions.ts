import { ICreateLoginActionParams } from "../../interfaces/redux.interfaces"
import { LOGIN, LOGOUT, SET_LOGIN_ERROR, SET_LOGIN_LOADING, SET_LOGOUT_ERROR, SET_LOGOUT_LOADING } from "../types/auth.types"

export const createSetLoginLoadingAction = (payload: boolean) => ({ type: SET_LOGIN_LOADING, payload })

export const createSetLoginErrorAction = (payload: string | null) => ({ type: SET_LOGIN_ERROR, payload })

export const createLoginAction = ({ token }: ICreateLoginActionParams) => ({ type: LOGIN, payload: token })

export const createSetLogoutLoadingAction = (payload: boolean) => ({ type: SET_LOGOUT_LOADING, payload })

export const createSetLogoutErrorAction = (payload: string | null) => ({ type: SET_LOGOUT_ERROR, payload })

export const createLogoutAction = () => ({ type: LOGOUT })