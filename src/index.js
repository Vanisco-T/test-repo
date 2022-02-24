import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import download from './download.jpeg';

import {books} from './books'

import Book from './Book'

//function Test() {
  //return (
    //<div>
    //<Person />
    //<Message />
    //</div>
  ///);
//}

//const Person = () =>{
 //return <h2>Vanisco T</h2>
//}

//const Message = () =>{
  //return <h2>Just a Test</h2>
 //}

//ReactDom.render(<Test />, document.getElementById('root')
//);


function Test() {
  return (
    <section className='booklist'>{
      books.map((book)=>{
        return (
          <Book key={book.id} book={book}></Book>
        );
    })} 
    </section>
  );
}

ReactDom.render(<Test />, document.getElementById('root')
);