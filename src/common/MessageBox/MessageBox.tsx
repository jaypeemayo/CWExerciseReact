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
        padding:'0px',
        width:'400px'
    },
};

export const MessageBox = (props: React.PropsWithChildren<IMessageBox>) => {
    return <Modal style={customStyles} isOpen={true} ariaHideApp={false} >
        <div className="modal-content" role="dialog" id="messsageBox" aria-labelledby="messageBoxLabel">
            <div className="modal-header">
                <h5 id="messageBoxLabel">
                    {props.title}
                </h5>
            </div>
            <div className="modal-body">
                <p>
                    {props.children}
                </p>
            </div>
            <div className="modal-footer">{props.buttonSet}</div>

        </div>
    </Modal>

}
