import * as React from "react";
import {FaChevronUp, FaChevronDown} from "react-icons/fa"; //todo up down

export interface ITable {
  children: any;
  columnNames: string[];
  sortedColumnName: string;
  isAscending: boolean;
  onClickHeader(columName : string): void;
}

const renderChevron = (props : ITable, columName : string) => {
  if (props.sortedColumnName === columName) {
    if (props.isAscending) {
      return <FaChevronDown></FaChevronDown>;
    } else {
      return <FaChevronUp></FaChevronUp>;
    }
  }
};
export const Table = (props : ITable) => {
  return (<table className="table thead-light table-hover">
    <thead className="thead-light">
      <tr>
        {
          props.columnNames.map((columName, i) => (<th key={i} onClick={() => {
              props.onClickHeader(columName);
            }}>
            {columName}
            {renderChevron(props, columName)}
          </th>))
        }
      </tr>
    </thead>
    <tbody>{props.children}</tbody>
  </table>);
};
