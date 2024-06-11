import React, { useState } from "react";
import { sendCustomerEmail } from "../../component/mail/mail";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Mail() {
const [details,setDetails]=useState({
  subject:"",
  message:"",
  to_email:""
});
const [emailError, setEmailError] = useState('');

const handleDetailChange=(event)=>{
  const {name,value}=event.target;
  setDetails((prev)=>{
    return{
      ...prev,
      [name]:value,
    };
  });
  if (name === 'to_email') {
    if (value === '') {
      setEmailError('');
    } else if (!validateEmail(value)) {
      setEmailError(' (Invalid email address.)');
    } else {
      setEmailError('');
    }
  }
};

const emailPattern = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;


const validateEmail = (email) => {
  return emailPattern.test(email);
}

const handleSubmit = async () => {
  const isEmailValid = validateEmail(details.to_email);
  console.log(isEmailValid);

  if (isEmailValid) {
      try {
          const res = await sendCustomerEmail(details);
          console.log('response:', res);
          // Handle response here
          if(res.status===200){
            toast.success('Email has been sent', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              // transition: Bounce,
              });
              setDetails(
                {
                  subject:"",
                  message:"",
                  to_email:""
                }
              )
          }
      } catch (err) {
          console.log('Error sending email:', err);
          toast.error('Unable to sent email been.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: Bounce,
            });
          // Handle error here
      }
  }
};

  return (
    <div className="mailContianer">
        <div className="mailBox">
        <div className="mailLeft">
          <img src="https://img.icons8.com/?size=100&id=7874&format=png&color=E8F88B"/>
          <div className="leftInfo">
              <h1 >Get In Touch</h1>
          <p>
            We'd love to hear from you! Have questions or feedback ? Fill out
            your name email,and message to get in touch with us directly.
          </p>
          </div>
        </div>

        <div className="mailRight">
            <div className="nameField">
             <label>Name</label>
             <input 
             name="subject"
             value={details.subject}
             onChange={handleDetailChange} 
             className="inputField"
             ></input>
            </div>

            <div className="emailField" >
             <label>Email  {emailError && <span className="errorMessage">{emailError}</span>}</label>
             <input 
             name="to_email"
             value={details.to_email}
             onChange={handleDetailChange} 
             className="inputField">
             </input>
            </div>

            <div className="messageField">
            <label>Message</label>
            <textarea 
            name="message"
            value={details.message}
            onChange={handleDetailChange} 
             rows={4} 
             className="inputField"
             ></textarea>
            </div>

            <div className="mailButton">
                <button onClick={()=>handleSubmit()}>Submit</button>
            </div>
        </div>
        </div>
        <ToastContainer/>
      </div>
  );
}

export default Mail;
