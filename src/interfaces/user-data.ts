import {UserWorker} from "./user-worker";

export interface UserData{
    id: number,
    clicIncome: number,
    lastConnection: string,
    money: number,
    username: string
    userWorkers: UserWorker[]
}