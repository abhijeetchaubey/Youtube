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
                    text:"chin tapak dam dam",
                    replies:[
                        {
                            name:"Abhijeet Chaubey",
                            text:"chin tapak dam dam",
                            replies:[
                                
                            ]
                            },
                    ]
                    },    {
                        name:"Abhijeet Chaubey",
                        text:"chin tapak dam dam",
                        replies:[
                            
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
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>comments:</h1>
            <div>
                {commentsData.map((comment,index)=>
                    <Comments key={index} data={comment}/>
                )}
            </div>
        </div>
    )
}

export default CommentsContainer
