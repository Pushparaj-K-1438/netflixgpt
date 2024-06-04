import { useState } from 'react'
import { LOGIN_BG } from '../../utils/image'
import Header from '../header/Header'
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  }
  return (
    <div className='h-screen bg-cover bg-no-repeat bg-center flex flex-col' style={{ backgroundImage: `url(${LOGIN_BG})`, backgroundColor: 'rgba(51, 51, 51, 0.5)' }}>
      <Header />
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col gap-5 items-center justify-center p-14 bg-black bg-opacity-70 text-white w-96 rounded">
          <h2 className='text-2xl font-bold'>
            {
              isSignIn ? 'Sign In' : 'Sign Up'
            }
          </h2>
          <div className="flex flex-col gap-4 w-full">
            <form className="flex flex-col gap-8">
              {
                !isSignIn && 
                <input type="text" name="" placeholder="Fullname" className="px-2 py-2 border border-red-900 rounded bg-transparent" />
              }
              
              <input type="text" name="" placeholder="Username" className="px-2 py-2 border border-red-900 rounded bg-transparent" />
              <input type="text" name="" placeholder="Password" className="px-2 py-2 border border-red-900 rounded bg-transparent" />
              <button type="submit" className='bg-red-800 flex items-center justify-center p-2 rounded'>
              {
                    isSignIn ? 'Sign in' : 'Sign Up'
                  }
              </button>
            </form>
            <div className='flex flex-col gap-2'>
              {
                isSignIn && <p className='text-xs cursor-pointer'>Forgot password</p>
              }
              
              <p className='text-xs text-gray-400 flex gap-2'>
              {
                    isSignIn ? 'New to Netflix' : 'Already Signed Up'
                  }
                <span className='font-bold cursor-pointer text-white' onClick={toggleSignIn}>
                  {
                    isSignIn ? 'Sign Up' : 'Sign In'
                  }
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login