import { FC } from "react";
import { Modal } from "react-bootstrap";
import { Action,Post } from "../reducer/postReducer";
import AddForm from "./AddForm";

interface EditModelProps {
    showModal: boolean;
    dataToEdit: Post | undefined;
    toggleModal: () => void;
    dispatch: React.Dispatch<Action>;
}

const EditModal: FC<EditModelProps> = ({
    toggleModal,
    dataToEdit,
    showModal,
    dispatch
}) => {
    return (
        <Modal show={showModal} onHide={toggleModal} >
            <Modal.Header closeButton>
                <Modal.Title>Update Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddForm 
                    dispatch={dispatch}
                    dataToEdit={dataToEdit}
                    toggleModal={toggleModal}
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditModal;