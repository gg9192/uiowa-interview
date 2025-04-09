export interface Request {
    firstName: string,
    lastName: string,
    dateOfPurchase: Date,
    amount: string,
    description: string
}

export interface DisplayTableRequest {
    name: string,
    date: Date,
    amount: string
}