import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import Axios from 'axios'
import './form.styles.css'

import NavList from '../navlist/navlist.component'



export default function Form() {


  const [emailMessage, setEmailMessage] = useState(
    { name: '', email: '', message: ''}
  )

  const [submitScreen, setSubmitScreen] = useState(
    false
  )

  const history = useHistory()

  const handleChange = (e) => {
    setEmailMessage({...emailMessage, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setEmailMessage({...emailMessage, disabled: true})

    console.log(emailMessage)

    Axios.post('http://radiant-basin-61864.herokuapp.com/api/email', emailMessage)
      .then(res => {
        if(res.data.success) {
          setEmailMessage({...emailMessage, disabled: false, emailSent: true})
          {console.log('success')}
        } else {
          if(res.data.success) {
            setEmailMessage({...emailMessage, disabled: false, emailSent: false})
          }
        }
      })
      .catch(err => {
        setEmailMessage({...emailMessage, disabled: false, emailSent: false})
        {console.log(err)}
      })
      .then(setSubmitScreen(true))
  }


  return (




    !submitScreen ?


    <div>
      <div className="split right">
        <div className="centered">
          <h3 className='hero'>Get In Touch</h3>
        </div>
      </div>

      <div className="split left">
        <div className="centered">
          <form onSubmit={handleSubmit}>
            <label>  Name: 
              <input 
                className ='fields'
                type='text'
                name='name'
                value={emailMessage.name} 
                placeholder='Elizabeth Warren' 
                onChange={handleChange}
                required>
              </input>
            </label>

            
            <label>  Email: 
              <input 
                className ='fields'
                type='email' 
                name='email'
                value={emailMessage.email} 
                placeholder='warren2020@policyplans.com'
                onChange={handleChange}
                required>
              </input>
            </label>

            {/* {console.log({email})} */}

            <label>  Message: 
              <textarea 
                type='text'
                wrap='hard'
                name='message'
                value={emailMessage.message} 
                placeholder={'Dear Meredith, \n \n Thank you for your recurring donation. \n I think you are really cool and smart. \n Your pal, Liz'}
                onChange={handleChange}>
              </textarea>
            </label>

            <input 
              className = 'submit'
              type="submit" 
              value="Send!" />

          </form>
          </div>
          </div>
    </div>


    : 

    <div>
      <div className="split left">
        <div className="centered">
          <h1>Thank you!</h1>
          <p>Your message has been sent. I will respond shortly</p>

        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <NavList />
        </div>
      </div>



    </div>




  )
}
