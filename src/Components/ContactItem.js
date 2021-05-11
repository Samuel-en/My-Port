import React from 'react'

function ContactItem({icon,text1,text2,title}) {
    return (
        <div className="contact">
            <img src={icon} alt=""/>
            <h6>{title}</h6>
            <p>{text1}</p>
            <p>{text2}</p>


            
        </div>
    )
}

export default ContactItem
