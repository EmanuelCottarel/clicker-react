export interface Token{
    exp: number,
    iat: number,
    roles: string[],
    username: string
}