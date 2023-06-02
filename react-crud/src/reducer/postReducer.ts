export interface Post {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
  }
  export interface Update {
    id: number;
    updates?: Post;
  }
  export interface Action {
    type: 'ADD_POST' | 'UPDATE_POST' | 'DELETE_POST'
    payload: Post | Update;
  }
  export interface State {
    posts: Post[];
  }

export const postsReducer = (state: State, action: Action) => {
    switch (action.type) {
        case "ADD_POST":
            return {
                ...state,
                posts:[...state.posts,action.payload as Post]
            };
        case "UPDATE_POST": 
          const {id, updates} = action.payload as Update;
            return {
              ...state,
              posts: state.posts.map((post) => {
                if(post.id === id){
                  return {
                    ...post,
                    ...updates
                  };
                }
                return post;
              })
            }
          case "DELETE_POST": {
            const { id } = action.payload;
              return {
                  ...state,
                  posts: state.posts.filter((post) => post.id !== id)
              };
            }
        default:
            return state;
    }
}