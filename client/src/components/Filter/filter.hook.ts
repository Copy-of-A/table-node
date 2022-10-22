import { ChangeEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { apiURL } from "../const"

export const useFilter = () => {
    const [inputValue, setInputValue] = useState<string>("")
    const [column, setColumn] = useState<string>("")
    const [query, setQuery] = useState<string>("")

    const navigate = useNavigate()

    useEffect(() => {
        if (inputValue !== "" && column !== "none" && query !== "none") {
            console.log("useEffect", `/${query}?${column}=${inputValue}`)
            navigate(`/${query}?${column}=${inputValue}`)
        }
        else {
            navigate('/')
        }
    }, [inputValue, column, query])

    const handleValueChange = (e: ChangeEvent) => {
        setInputValue((e.target as HTMLInputElement).value)
    }

    const handleColumnChange = (e: ChangeEvent) => {
        setColumn((e.target as HTMLSelectElement).value)
    }

    const handleQueryChange = (e: ChangeEvent) => {
        setQuery((e.target as HTMLSelectElement).value)
    }

    const handleResetClick = () => {
        setInputValue("")
        setColumn("none")
        setQuery("none")
        navigate('/')
    }

    return {
        handleValueChange,
        handleColumnChange,
        handleQueryChange,
        handleResetClick,
        inputValue,
        column,
        query,
    }
}