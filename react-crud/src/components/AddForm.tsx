import { FC, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Action,Post } from "../reducer/postReducer";
// import { Link } from "react-router-dom";


interface AddFormProps {
    dispatch: React.Dispatch<Action>;
    dataToEdit: Post | undefined;
    toggleModal: () => void;
}

const AddForm : FC<AddFormProps> = ({dispatch, dataToEdit,toggleModal}) => {
    const [post, setContact] = useState({
        firstName: dataToEdit?.firstName ? dataToEdit.firstName : '',
        lastName: dataToEdit?.lastName ? dataToEdit.lastName : '',
        phone: dataToEdit?.phone ? dataToEdit.phone : ''
    });
    const [errorMsg, setErrorMsg] = useState('');
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value } = event.target;
        setContact((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };
    const handleOnSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { firstName, lastName, phone } = post;
        if (
          firstName.trim() === '' ||
          lastName.trim() === '' ||
          phone.trim() === ''
        ) {
          setErrorMsg('All the fields are required.');
          return;
        } else if (!phone.trim().match(/^\d{10}$/g)) {
          setErrorMsg('Please enter a valid 10 digit phone number.');
          return;
        }

        if(!dataToEdit){
        dispatch({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                ...post
            },
        });
        setContact({
            firstName: '',
            lastName: '',
            phone: ''
          });
        setErrorMsg('');
    } else {
        toggleModal();
        dispatch({
            type: "UPDATE_POST",
            payload: {
                id: dataToEdit.id,
                updates: {
                    id: Date.now(),
                    ...post
                }
            }
        })
    }
    };

    return (
            <Form onSubmit={handleOnSubmit} className='contact-form'>
                {errorMsg && <p className='errorMsg'>{errorMsg}</p>}
                <Form.Group controlId='firstName'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                    className="firstName"
                    name = "firstName"
                    value = {post.firstName}
                    type="text"
                    onChange={handleOnChange}
                    />
                </Form.Group>
                <Form.Group controlId='lastName'>
                    <Form.Label>last Name</Form.Label>
                    <Form.Control 
                    className="lastName"
                    name = "lastName"
                    value = {post.lastName}
                    type="text"
                    onChange={handleOnChange}
                    />
                </Form.Group>
                <Form.Group controlId='phone'>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control 
                    className="phone"
                    name = "phone"
                    value = {post.phone}
                    type="number"
                    onChange={handleOnChange}
                    />
                </Form.Group>
                <Form.Group controlId="Submit">
                    <Button variant="primary" type="submit" className="submit-btn" > {dataToEdit ? 'Update Contact' : 'Add Contact'}</Button>
                </Form.Group>
            </Form>
    );
};

export default AddForm;