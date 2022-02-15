import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
  const [{ name, email, password, password2 }, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth,
  )
  useEffect(() => {
    isError ? toast.error(message) : (isSuccess || user) && navigate('/')
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = e => {
    e.preventDefault()
    password !== password2
      ? toast.error('passwords do not match')
      : dispatch(register({ name, email, password }))
  }
  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              className='form-control'
              type='text'
              id='name'
              name='name'
              value={name}
              placeholder='enter your name'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='email'
              id='email'
              name='email'
              value={email}
              placeholder='enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='password'
              id='password'
              name='password'
              value={password}
              placeholder='enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='password'
              id='password2'
              name='password2'
              value={password2}
              placeholder='confirm password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
