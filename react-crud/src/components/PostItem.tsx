import { FC } from 'react';
import { Action, Post } from '../reducer/postReducer';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai';


interface ExtraProps {
  handleEdit: (id: number) => void;
  dispatch: React.Dispatch<Action>;
}
const PostItem: FC<Post & ExtraProps> = ({ id, firstName, lastName, phone, handleEdit,
  dispatch}) => {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
      <td>
        <AiFillEdit size={20} className="icon" onClick={() => handleEdit(id)}/>
      </td>
      <td>
        <AiFillDelete size={20} className="icon" onClick={() => {
            const confirmDelete = window.confirm(
              `Are you sure you want to delete contact for user ${firstName} ${lastName}?`
            );
            if (confirmDelete) {
              dispatch({
                type: 'DELETE_POST',
                payload: { id }
              });
            
            }
          }}/>
      </td>
    </tr>
  );
};
export default PostItem;