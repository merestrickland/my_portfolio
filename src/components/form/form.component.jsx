import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'

import Submit from '../submit/submit.component'


export default function Form() {


  const [emailMessage, setEmailMessage] = useState(
    { name: '', email: '', message: ''}
  )

  const history = useHistory()

  const handleChange = (e) => {
    setEmailMessage({...emailMessage, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setEmailMessage({...emailMessage, disabled: true})

    console.log(emailMessage)

    Axios.post('http://localhost:8000/api/email', emailMessage)
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
      })
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>  Name: 
        <input 
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
        <input 
          as='textarea'
          name='message'
          value={emailMessage.message} 
          placeholder='Your Message Here...'
          onChange={handleChange}>
        </input>
      </label>

      <input 
        type="submit" 
        value="Submit"
      />

    </form>
  )
}
