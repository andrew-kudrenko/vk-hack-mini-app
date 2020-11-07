import { ComponentIDType } from "./redux.interfaces"

export type EntityIDType = string | number

export interface IPanel {
    id: ComponentIDType
}

export interface IView {
    id: ComponentIDType
}

export interface ICoach {
    id: EntityIDType
    firstName: string
    middleName: string
    lastName: string
    description: string
    students: number
    rating: number
    cost: number
    country: string
    city: string
    subjects: Array<string>
    likes: number
    dislikes: number
}

export interface ISubject {
    id: EntityIDType
    title: string
}