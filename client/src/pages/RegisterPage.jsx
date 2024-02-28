import {useState} from 'react'
import "../styles/register.scss"

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null
  });

  const handleChange = (e) => {
    const {name, value, files} = e.target
    setFormData({
      ...formData,
      [name]: value,
      [name]: name === "profileImage" ? files[0] :value
    })
  }

  console.log(formData)

  return (
    <div className='register'>
      <div className='register_content'>
        <form className='register_content_form'>
          <input
            placeholder='First Name'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            placeholder='Last Name'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            type='email'
            required
          />
          <input
            placeholder='Password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            type='password'
            required
          />
          <input
            placeholder='Confirm Password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            type='password'
            required
          />
          <input
            id='image'
            name='profileImage'
            onChange={handleChange}
            type='file'
            accept='image/'
            required
            style={{ display: 'none' }}
          />
          <label htmlFor='image'>
            <img src='/assets/addImage.png' alt='add profile'/>
            <p>Upload Profile Photo</p>
          </label>
          <button type='submit'>REGISTER</button>
        </form>
        <a href="/login">
          Already have an account? Log In Here
        </a>
      </div>
    </div>
  )
}

export default RegisterPage