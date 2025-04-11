interface ProcurementRequestTableItem {
    id: number,
    firstName: string,
    lastName: string,
    description: string,
    filePath: string,
    dateOfPurchase: string,
    amount: string
}

export default interface PaginationRequest{
    totalItems: number,
    items: ProcurementRequestTableItem[]
}