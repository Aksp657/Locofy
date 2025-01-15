import './App.css'
import Options from './component/login-options'

function App() {
 

  return (
    <>
      <div className="First-box">
        <img className='locofy' width={150} src="	https://www.locofy.ai/assets/images/locofy-logo.svg" alt="" />
        <div className='second-box'>


          <div className="box1">
           
          </div>


          <div className="box2">
            <h2>Welcome fellow Loco!</h2>
            <p>Continue with</p>
            <Options></Options>
            <div className="seperator"></div>
            <br />
            <p>or, sign-in with your email </p>
            <i></i>
           
            <input className='email' type="email" placeholder='         Email' />
           <br /> 
            <input className='password' type="password" placeholder='        Password' />
            <br />
            <a className='anchor' href="www.Google.com"> Forgot Passwaord?</a>
            <br /><br />
            <button>Sign in</button>
            <p className='signup'>Don't have an account?<a href="">Sign up</a></p> 
                 
          </div>

        </div>
      </div>
    </>
  )
}

export default App
