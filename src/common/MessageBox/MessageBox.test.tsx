import { render } from "@testing-library/react";
import * as React from "react";
import { MessageBox } from "./MessageBox";

jest.mock('react-modal', () => {
    const React = require('react');
    const TestReactModal = require('../../../tests/__mocks__/mockReactModal');
    return TestReactModal.default;
  });
  
  
test("Test snapshot", () => {
    const {container, unmount} = render(
        <MessageBox
            title={"Test Title"}
            buttonSet={<button>test Buttonset</button>}
        />,
    );

    expect(container).toMatchSnapshot();
    unmount();


});


