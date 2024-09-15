import React from 'react'
import Comments from './Comments'

const commentsData =[
    {
    name:"Abhijeet Chaubey",
    text:"chin tapak dam dam",
    replies:[
        {
            name:"Abhijeet Chaubey",
            text:"chin tapak dam dam",
            replies:[
                {
                    name:"Abhijeet Chaubey",
                    text:"hahaaaaha",
                    replies:[
                        {
                            name:"Abhijeet Chaubey",
                            text:"padh le bhai kuch nhi rakha in sb mei",
                            replies:[
                                
                            ]
                            },
                    ]
                    },   
                    
            ]
            },
    ]
    },
    {
    name:"Abhijeet Chaubey",
    text:"chin tapak dam dam",
    replies:[
        
    ]
    },
    {
    name:"Abhijeet Chaubey",
    text:"chin tapak dam dam",
    replies:[
        
    ]
    },
    {
    name:"Abhijeet Chaubey",
    text:"chin tapak dam dam",
    replies:[
        
    ]
    },
    {
    name:"Abhijeet Chaubey",
    text:"chin tapak dam dam",
    replies:[
        
    ]
    },
    
]
function CommentsContainer() {
    return (
        <div className='m-5 ml-0 p-2 '>
            <h1 className='text-2xl font-bold mb-2'>comments:</h1>
            <div className=''>
                {commentsData.map((comment,index)=>
                    <Comments key={index} data={comment}/>
                )}
            </div>
        </div>
    )
}

export default CommentsContainer
