import { ComponentIDType } from "./redux.interfaces"

export type EntityIDType = string | number

export enum UserRoleEnum {
    Student,
    Coach
}

export interface IPanel {
    id: ComponentIDType
}

export interface IView {
    id: ComponentIDType
}

export interface IUser {
    id: EntityIDType
    firstName: string
    middleName: string
    lastName: string
    country: string
    city: string
    isCoach: boolean
}

export interface IStudent extends IUser{

}

export interface ICoach extends IUser {   
    description: string
    students: number
    rating: number
    cost: number
    subjects: Array<string>
    likes: number
    dislikes: number
}

export interface ISubject {
    id: EntityIDType
    title: string
}