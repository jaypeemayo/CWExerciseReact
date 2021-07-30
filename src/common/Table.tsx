import * as React from "react";

export interface ITable {
    children: any;
    columnNames: string [];
    sortedColumnName: string;
    isAscending: boolean
    onClickHeader(columName: string): void;
}
export const Table = (props: ITable) => {
    return <table className="table thead-light table-hover">
        <thead className="thead-light">
            <tr>
                {
                    props.columnNames.map((columName, i) => <th key={i} onClick={()=>{props.onClickHeader(columName);}}>{columName}</th>)
                }
            </tr>
        </thead>
        <tbody>
            {props.children}
        </tbody>
    </table>

}
