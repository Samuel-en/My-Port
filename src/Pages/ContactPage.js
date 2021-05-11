import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../Img/phone.svg';
import email from '../Img/email.svg';
import location from '../Img/location.svg';

function ContactPage() {
    return (
        <div className="ContactPage">
            <div className="map-sect">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424539.83795829304!2d-84.70150838149637!3d33.76796566819289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1620702293761!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className="contact-sect">
                <ContactItem icon={phone}text1={'6786871242'} title={'Phone'}/>
                <ContactItem icon={email}text2={'samiandreas70@gmail.com'} title={'Email'} />
                <ContactItem icon={location}text3={'6786871242'} title={'Location'}/>
            </div>
            <h1>Contact Page </h1>
        </div>
    )
}

export default ContactPage
