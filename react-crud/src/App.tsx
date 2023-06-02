import { useEffect, useReducer, useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddForm from './components/AddForm';
import { Post, postsReducer,State } from './reducer/postReducer';
import PostList from './components/PostList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditModal from './components/EditModel';

const initialState: State = {
  posts: [],
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [dataToEdit, setDataToEdit] = useState<Post | undefined>(undefined);
  const [state, dispatch] = useReducer(postsReducer,initialState)

  useEffect(() => {
    if(!showModal){
      setDataToEdit(undefined)
    }
  },[showModal]);

  const toggleModal = () =>{
    setShowModal((show) => !show);
  };

  const handleEdit = (id: number) => {
    setDataToEdit(state.posts.find((post) => post.id === id));
    toggleModal();
  };

  return (
   <BrowserRouter>
   <Routes>
          <Route path='/' element = {<Header />} />
          <Route path='/add' element = {<><AddForm dispatch= {dispatch} dataToEdit={dataToEdit} toggleModal={toggleModal} /><hr />{state.posts.length > 0 && (<PostList dispatch={dispatch} posts={state.posts} handleEdit={handleEdit} />)}
          <EditModal
            showModal={showModal}
            dataToEdit={dataToEdit}
            toggleModal={toggleModal}
            dispatch={dispatch}
          />
      </>} />
          {/* <Route path='/show' element = {<PostList posts={state.posts} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
