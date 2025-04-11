export interface ProcurementRequest {
    id: number,
    firstName: string,
    lastName: string,
    description: string,
    dateOfPurchase: string,
    amount: string
}

export interface PaginationRequest{
    totalItems: number,
    items: ProcurementRequest[]
}
