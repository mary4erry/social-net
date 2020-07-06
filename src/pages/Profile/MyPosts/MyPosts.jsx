import React from 'react'
import { Field, reduxForm } from 'redux-form'

import Post from './Post.jsx'
import style from './MyPosts.module.css'
import { required, maxLengthCreator } from '../../../utils/validators/validator.js'
import { Element } from '../../../controls/FormsControls/FormsControls.js'

const maxLength10 =  maxLengthCreator(10)
const Textarea = Element('textarea')

const AddPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field
               component={Textarea}
               name='newPostText'
               placeholder={'Type text'}
               validate={[required, maxLength10]}
               />
         </div>
         <div>
            <button>Add post</button>
         </div>
      </form>
   )
}

const PostsReduxForm = reduxForm({ form: 'addPostForm' })(AddPostForm)

const MyPosts = (props) => {

   let postItems = props.posts.map( p => 
      <Post
         message={p.message}
         likesCount={p.likesCount}
         id={p.id} key={p.id}/>
   )
   const onAddPost = (data) => {
      props.addPost(data.newPostText);
   }
   return (
      <div className={style.posts_block}>
         <h3>My posts</h3>
         <PostsReduxForm onSubmit={onAddPost}/>
         <div className={style.post}>
            {postItems}
         </div>
      </div>
   )
}
export default MyPosts
