import { UserRoleEnum } from "../../interfaces/entities.interfaces"
import { IAction, IUserState } from "../../interfaces/redux.interfaces"
import { SET_ROLE, SET_USER_DATA } from "../types/user.types"

const initialState: IUserState = {
    role: UserRoleEnum.Student,
    user: null
}

export const userReducer = (state: IUserState = initialState, { type, payload }: IAction): IUserState => {
    switch (type) {
        case SET_ROLE: return { ...state, role: payload }
        case SET_USER_DATA: return { ...state, user: payload }
        default: return state
    }
} 