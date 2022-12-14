import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from 'react-router-dom';
import { apiURL, FilterColumn, FilterQuery, RowData } from "../const";

export interface TableProps {
    filterQuery: FilterQuery | null,
}

export const useTableHook = (filterQuery: FilterQuery | null) => {
    const [searchParams] = useSearchParams();
    const [data, setData] = useState<Array<RowData>>([]);
    const navigate = useNavigate()

    let filterValue: string = ""
    if (searchParams.get(FilterColumn.Title) !== null) {
        filterValue = `${FilterColumn.Title}=${searchParams.get(FilterColumn.Title)}`
    } else if (searchParams.get(FilterColumn.Amount) !== null) {
        filterValue = `${FilterColumn.Amount}=${searchParams.get(FilterColumn.Amount)}`
    } else if (searchParams.get(FilterColumn.Distance) !== null) {
        filterValue = `${FilterColumn.Distance}=${searchParams.get(FilterColumn.Distance)}`
    }

    const getData = () => {
        console.log("getData", filterQuery, `${apiURL}/api/${filterQuery}?${filterValue}`)
        fetch(filterQuery && filterValue ? `${apiURL}/api/${filterQuery}?${filterValue}` : `${apiURL}/api`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: "GET"
        })
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setData(myJson)
            })
            .catch(() => {
                navigate('/')
            });
    }

    useEffect(() => {
        getData()
    }, [filterQuery, searchParams])

    return {
        data,
    }
}