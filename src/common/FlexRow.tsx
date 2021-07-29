import * as React from "react";

export interface IFlexRow {
    children: any;
}
export const FlexRow = (props: IFlexRow) => {
    return <div className="d-flex flex-row flex-wrap">
        {props.children}
    </div>
}
