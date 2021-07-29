import * as React from "react";

export interface IFlexColumn {
    children: any;
}
export const FlexColumn = (props: IFlexColumn) => {
    return <div className="d-flex flex-column ">
        {props.children}
    </div>
}
