import { FilterColumnList, FilterQueryList } from "../const";
import { DropDown } from "../DropDown/DropDown";
import { useFilter } from "./filter.hook";
import styles from './filter.module.scss';

export const Filter = () => {
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
            <p>Выберете колонку: </p>
            <DropDown options={FilterColumnList} value={column} selectId={"FilterColumn"} handleChange={handleColumnChange} />
            <p>Выберете условие: </p>
            <DropDown options={FilterQueryList} value={query} selectId={"FilterColumn"} handleChange={handleQueryChange} />
            <p>Введите значение: </p>
            <input className={styles.input} value={inputValue} onChange={handleValueChange}></input>
            <button className={styles.button} onClick={handleResetClick}>Сбросить фильтр</button>
        </>
    )
}