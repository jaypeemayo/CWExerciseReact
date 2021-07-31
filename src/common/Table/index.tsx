export interface ITable {
    children: any;
    columnNames: string[];
    sortedColumnName: string;
    isAscending: boolean;
    onClickHeader(columName: string): void;
}
