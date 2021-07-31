import Modal from 'react-modal';
import * as React from "react";

export interface IMessageBox {
   title: string,
   buttonSet: any,
}

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  
export const MessageBox = (props: React.PropsWithChildren<IMessageBox>) => {
    return <Modal style={customStyles}  isOpen={true}>
        <div role="dialog"  id="messsageBox" aria-labelledby="messageBoxLabel"  aria-modal="true">
            <h1 id="messageBoxLabel">
                {props.title}
            </h1>
            <p>
                {props.children}
            </p>
            <div>{props.buttonSet}</div>

        </div>
    </Modal>

}
