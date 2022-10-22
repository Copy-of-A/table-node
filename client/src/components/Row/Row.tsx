import { FC } from "react";
import { RowData } from "../const";

export interface RowProps {
    data: RowData
}

export const Row: FC<RowProps> = ({ data }) => (
    <tr>
        <td>{data.title}</td>
        <td>{data.amount}</td>
        <td>{data.distance}</td>
    </tr>
)