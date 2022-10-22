import { ChangeEvent, FC } from "react";
import { DropDownOption } from "../const";
import style from "./dropDown.module.scss"

export interface DropDownProps {
    options: Array<DropDownOption>,
    value: string,
    selectId: string,
    handleChange: (e: ChangeEvent) => void,
}

export const DropDown: FC<DropDownProps> = ({ options, value, selectId, handleChange }) => {
    return (
        <select id={selectId} className={style.dropDown} onChange={handleChange} value={value}>
            <option value="none">Не выбрано</option>
            {options.map((_) => <option className={style.dropDown__option} value={_.id}>{_.name}</option>)}
        </select>
    )
}