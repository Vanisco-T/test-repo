import React from "react";


const Book = (props) =>{
    const {img,title,author} = props.book;
  
    const onclickHandle = () => {
      alert('The click');
    }
  
     return <article className='book' onMouseOver={()=>{ console.log(author)}}>
  < img src={img} alt="" onClick={onclickHandle}/>
  <h1 onClick={() => alert(title)}>{title}</h1>
  <h4>{author}</h4>
   </article>
  }

export default Book