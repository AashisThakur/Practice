import { FC } from "react";
import { Action, Post } from "../reducer/postReducer";
import PostItem from "./PostItem";

interface PostListProps {
    posts: Post[];
    handleEdit: (id: number) => void;
    dispatch: React.Dispatch<Action>;
}

const PostList: FC<PostListProps> = ({posts,handleEdit,
    dispatch}) => {
    return (
        <div className="contacts-list">
            <h3 className="contacts-list-title"> Posts List</h3>
            <div className="contacts-list-table-container">
                <table className="contacts-list-table">
                    <thead className="contacts-list-header">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        posts.map((props) => (
                            <PostItem 
                                key={props.id}
                                {...props}
                                handleEdit={handleEdit}
                                dispatch={dispatch}
                            />
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PostList;