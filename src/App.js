import React from 'react'
import{Admin,Resource}from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/postList'
 

function App() {
  return 
    <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name ='posts' list={postList} />

    </Admin>

}

export default App;
