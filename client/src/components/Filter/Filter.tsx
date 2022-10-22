import { FC } from "react";
import { FilterColumnList, FilterQueryList } from "../const";
import { DropDown } from "../DropDown/DropDown";
import { useFilter } from "./filter.hook";

export interface FilterProps {

}

export const Filter: FC<FilterProps> = () => {
    const {
        handleValueChange,
        handleColumnChange,
        handleQueryChange,
        handleResetClick,
        inputValue,
        column,
        query,
    } = useFilter()
    return (
        <>
            <DropDown options={FilterColumnList} value={column} selectId={"FilterColumn"} handleChange={handleColumnChange} />
            <DropDown options={FilterQueryList} value={query} selectId={"FilterColumn"} handleChange={handleQueryChange} />
            <input value={inputValue} onChange={handleValueChange}></input>
            <button onClick={handleResetClick}>Reset filter</button>
        </>
    )
}