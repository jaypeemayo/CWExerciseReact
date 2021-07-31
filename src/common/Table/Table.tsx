import * as React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import BTable from 'react-bootstrap/Table';
import { ITable } from ".";


const renderChevron = (props: ITable, columName: string) => {
    if (props.sortedColumnName === columName) {
        if (props.isAscending) {
            return <FaChevronDown></FaChevronDown>;
        } else {
            return <FaChevronUp></FaChevronUp>;
        }
    }
};
export const Table = (props: ITable) => {
    return (<BTable striped bordered hover>
        <thead className="thead-light">
            <tr>
                {
                    props.columnNames.map((columName, i) => (<th key={i} onClick={() => {
                        props.onClickHeader(columName);
                    }}>
                        <a href="javascript:void(0)" >
                            <span className="px-1">{columName}</span>
                            {renderChevron(props, columName)}
                        </a>

                    </th>))
                }
            </tr>
        </thead>
        <tbody>{props.children}</tbody>
    </BTable>);
};
