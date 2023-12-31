import {useState} from 'react'
import "./CSS/Contact.css"

const Contact = () => {
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(title, message)

    setTitle("")
    setMessage("")
  }



  return (
    <div className='contact-me-section' id='contact'>
      <h1 className='big-heading'>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            placeholder='Title'
            type='text'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            minLength={3}
            maxLength={50}
          />
          <label className={title ? 'input-label input-shrink' : 'input-label'}>Title</label>
        </div>
        <div className='input-group'>
          <textarea
            placeholder='Message'
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            minLength={10}
            maxLength={1000}
          />
          <label className={message ? 'input-label input-shrink' : 'input-label'}>Message</label>
        </div>
        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact