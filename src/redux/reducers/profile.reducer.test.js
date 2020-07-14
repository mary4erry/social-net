import profileReducer, { addPost, deletePost } from './profile.reducer'
let state = {
   posts: [
      { id: 1, message: 'My first post ', likesCount: 5 },
      { id: 2, message: 'Story ', likesCount: 25 },
      { id: 3, message: 'About javaScript ', likesCount: 3 },
      { id: 4, message: 'Learn React', likesCount: 234 },
   ] 
}

it('length of post should be incremented', () => {
   //1.  test data
   let action = addPost('hello world')
   
   // 2 action
   let newState = profileReducer(state, action)
   //3 expectation 
   expect(newState.posts.length).toBe(5) 
 });
 
 it('message correct', () => {
   //1.  test data
   let action = addPost('hello world')
   
   // 2 action
   let newState = profileReducer(state, action)
   //3 expectation 
   expect(newState.posts[4].message).toBe('hello world') 
 });
 
 it('length decrement', () => {
   //1.  test data
   let action = deletePost(1)
   
   // 2 action
   let newState = profileReducer(state, action)
   //3 expectation 
   expect(newState.posts.length).toBe(3) 
 });
 