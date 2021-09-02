import React from 'react'
import marked from 'marked'

export default function Previewer({text}) {

    //converting markdown
    const html=marked(text)

    return (
        <div className="dg-dark border text-white text-left" style={{height:"300px",backgroundColor:"black"}} dangerouslySetInnerHTML={{__html:html}}>
           
        </div>
    )
}
