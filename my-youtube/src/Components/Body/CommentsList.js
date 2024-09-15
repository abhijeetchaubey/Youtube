import React from 'react'
import Comments from './Comments';

function CommentsList({info}) {
    console.log("hello",info);
    
    return (
        <div>{info.map((comment,index)=>
            <div className='pl-5  ml-5  '>
                <Comments key={index} data={comment}/>
            </div>
        )
        }
        </div>
    )
}

export default CommentsList
