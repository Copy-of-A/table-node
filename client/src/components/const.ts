export const apiURL = "http://localhost:8080"

export enum FilterQuery {
    More = "more",
    Less = "less",
    Equals = "equals",
    Contains = "contains",
}

export enum FilterQueryDefs {
    More = "Больше",
    Less = "Меньше",
    Equals = "Равно",
    Contains = "Содержит",
}

export enum FilterColumn {
    Name = "name",
    Amount = "amount",
    Distance = "distance",
}

export enum FilterColumnDefs {
    Name = "Название",
    Amount = "Количество",
    Distance = "Расстояние",
}

export interface RowData {
    id: number,
    title: string,
    amount: number,
    distance: number,
}

export interface DropDownOption {
    id: string,
    name: string
}

export const FilterQueryList = [
    {
        id: FilterQuery.Contains,
        name: FilterQueryDefs.Contains 
    },
    {
        id: FilterQuery.Equals,
        name: FilterQueryDefs.Equals 
    },
    {
        id: FilterQuery.More,
        name: FilterQueryDefs.More 
    },
    {
        id: FilterQuery.Less,
        name: FilterQueryDefs.Less 
    },
]

export const FilterColumnList = [
    {
        id: FilterColumn.Name,
        name: FilterColumnDefs.Name 
    },
    {
        id: FilterColumn.Amount,
        name: FilterColumnDefs.Amount 
    },
    {
        id: FilterColumn.Distance,
        name: FilterColumnDefs.Distance 
    },
]