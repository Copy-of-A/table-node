import { FC } from "react"
import { Filter } from "../Filter/Filter";
import { Row } from "../Row/Row";
import { TableProps, useTableHook } from "./table.hook"

export const Table: FC<TableProps> = ({ filterQuery }) => {
    console.log("filter", filterQuery)

    const {
        data,
    } = useTableHook(filterQuery);

    return (
        <div>
            <Filter />
            <table>
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
        </div>
    )
}