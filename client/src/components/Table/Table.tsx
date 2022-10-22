import { FC } from "react"
import { Filter } from "../Filter/Filter";
import { Row } from "../Row/Row";
import { TableProps, useTableHook } from "./table.hook"
import styles from './table.module.scss'

export const Table: FC<TableProps> = ({ filterQuery }) => {
    console.log("filter", filterQuery)

    const {
        data,
    } = useTableHook(filterQuery);

    return (
        <>
            <Filter />
            {data.length > 0
                ?
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>Distance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((el) => <Row key={el.id} data={el} />)}
                    </tbody>
                </table>
                : <p>По заданным фильтрам ничего не найдено</p>
            }
        </>
    )
}