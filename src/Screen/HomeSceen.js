import React from 'react'

import TodoListForm from '../components/TodoListForm'
import TodoListList from '../components/TodoListList'

const HomeSceen = () => {
  return (
    <>
      <h1 className='text-info text-center'>To do list</h1> 
        <TodoListForm />
      <h1 className='text-info text-center'>List</h1>
      <TodoListList />
    </>
    
  )
}

export default HomeSceen
 