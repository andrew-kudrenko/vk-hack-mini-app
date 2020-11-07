import { IUser, UserRoleEnum } from "../../interfaces/entities.interfaces"
import { IAction } from "../../interfaces/redux.interfaces"
import { SET_ROLE, SET_USER_DATA } from "../types/user.types"

export const setRole = (payload: UserRoleEnum): IAction<UserRoleEnum> => ({ type: SET_ROLE, payload })
export const setUserData = (payload: IUser): IAction<IUser> => ({ type: SET_USER_DATA, payload })