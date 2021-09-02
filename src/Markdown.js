import React from 'react'

export default function Markdown(props) {



    return (
        <textarea onChange={(e)=>props.setText(e.target.value)} style={{width:"100%", height:"300px",}}></textarea>
    )
}
