import React, { useState } from 'react'
import "./Contact.scss"
import Card from '../../components/card/Card'
import { FaEnvelope, FaLocationArrow, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { BACKEND_URL } from '../../services/authService'
import axios from 'axios'

const Contact = () => {
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const data = {
        subject,
        message
    }

    const sendEmail = async (e) =>{
        e.preventDefault();
        const response = await axios.post(`${BACKEND_URL}/api/contactus`, data); 
        setSubject("")
        setMessage("")
        toast.success(response.data.message)
        try {
            
        } catch (error) {
            toast.error(error.message)
        }

    };
  return (
    <div className='contact'>
        <h3 className='--mt'>Contact Us</h3>
        <div className="section">
            <form onSubmit={sendEmail}>
                <Card cardClass="card">

                    <label >Subject</label>
                    <input type="text" name="subject" placeholder="Subject" required value={subject} onChange={(e) => setSubject(e.target.value)} />

                    <label >Message</label>
                    <textarea name='message' required value={message} onChange={(e) => setMessage(e.target.value)} cols="30" rows="10" ></textarea>
                    <button className='--btn --btn-primary'>Send Message</button>
                </Card>
            </form>

            <div>
                <Card cardClass={"card2"} >
                    <h3>Contact Information</h3>
                    <p>Fill the form or contact us via other channels listed bellow</p>
                    <div className="icons">
                        <span>
                            <FaPhoneAlt />
                            <p>08068692011</p>
                        </span>
                        <span>
                            <FaEnvelope />
                            <p>Support@Bven.com</p>
                        </span>
                        <span>
                            <FaLocationArrow  />
                            <p>Lagos, Nigeria</p>
                        </span>
                        <span>
                            <FaTwitter  />
                            <p>OrevaLtd</p>
                        </span>
                    </div>               
                </Card>
            </div>
        </div>

    </div>
  )
}

export default Contact