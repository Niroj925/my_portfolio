import React from "react";

function Mail() {
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
             <input className="inputField"></input>
            </div>

            <div className="emailField" >
             <label>Email</label>
             <input className="inputField"></input>
            </div>

            <div className="messageBox">
            <label>message</label>
            <textarea rows={4} className="inputField"></textarea>
            </div>

            <div className="mailButton">
                <button >Submit</button>
            </div>
        </div>
        </div>
      </div>
  );
}

export default Mail;
