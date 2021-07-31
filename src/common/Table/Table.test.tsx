import { render } from "@testing-library/react";
import * as React from "react";
import { Table } from "./Table";



jest.mock("react-icons/fa", () => {
    return {
        FaChevronUp: (props: any) => {
            return <div>Mock Chevron Up</div>;
        },
        FaChevronDown: (props: any) => {
            return <div>Mock Chevron Down</div>;
        },
    };
});

test("Test snapshot", () => {
    const onClickHeader = jest.fn();
    const {container, unmount} = render(
        <Table  columnNames={["Column A", "Column B"]} sortedColumnName={"Column A"} isAscending = {true} onClickHeader={onClickHeader}>
           {test}
        </Table>
        ,
    );

    expect(container).toMatchSnapshot();
    unmount();
});


