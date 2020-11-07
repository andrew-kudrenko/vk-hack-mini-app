import { IAction, ICoachesState } from "../../interfaces/redux.interfaces";

export const coachesReducer = (state: ICoachesState, { type, payload }: IAction): ICoachesState => {
    switch (type) {
        default: return state
    }
}