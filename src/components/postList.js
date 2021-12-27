import { List } from '@material-ui/core'
import React from 'react'
import {List ,Datagrid,Textfield ,DateField,EditButton,DeleteButton} from 'react-admin'

const PostList = (props) => {
    return <List {...props} >
        <Datagrid>
        <Textfield source='id'/>
        <Textfield source='title'/>
        <DateField source='publishedAt'/>
        <EditButton basePath='/posts'/>
        <DeleteButton basePath='/posts'/>
        </Datagrid>

    </List>
}