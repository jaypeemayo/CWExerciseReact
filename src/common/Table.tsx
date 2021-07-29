import * as React from "react";

export interface ITable {
    head: any;
    children: any;
}
export const Table = (props: ITable) => {
    return <table className="table thead-light table-hover">
        <thead className="thead-light">
            {props.head}
        </thead>
        <tbody>
            {props.children}
        </tbody>
    </table>

}
