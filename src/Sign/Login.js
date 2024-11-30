
// import React, { useRef } from 'react'




// export default function Login() {
//   let imge_loge=useRef(null);
//   const Next=()=>imge_loge.current.scrollLeft +=400;
//   const Past=()=>imge_loge.current.scrollLeft -=400;


//   return (
//    <div className='list' ref={imge_loge}>
//      <div className='form_wrapper' >
//       <h1 className='logen_New'> تسجيل الذخول</h1>
//       <from >
//        <div className='gf'>
//        <div className='from_control'>
//        <li className="error">اسم المستخدم</li>
//           <input type='text' name='firstname' placeholder='fristname' className='font'/>
//         </div>

       

//         <div className='from_control'>
//         <li className="error">اسم المستخدم</li>

//           <input type='email' name='email' placeholder='email'className='font'/>

//         </div>

//         <div className='from_control'>
//         <li className="error">اسم المستخدم</li>

//           <input type='password' name='password' placeholder='password'className='font'/>

//         </div>

//         <button className='button_Next' type='Submit' onClick={Next}>انشاء حساب</button>
//         <a className='sigle_in' href="#">انشاء حساب</a> 

//        </div>
//       </from>
      
//     </div>


//     <div className='form_wrapper'>
//       <h1 className='logen_New'> تسجيل الذخول</h1>
      
//       <from >
//       <div className='list_sing'>
//         <button className='Sing_Next' type='Submit' onClick={Past}>التالي</button>
//         <button type='Submit' className='Sing_past' >تسجيل</button>
//         </div>

//        <div className='gf'>
//        <div className='from_control sin'>
//        <li className="error">اسم المستخدم</li>
//           <input type='text' name='firstname' placeholder='fristname' className='font'/>
//         </div>


//         <div className='from_control sin'>
//         <li className="error">اسم المستخدم</li>

//           <input type='password' name='password' placeholder='password'className='font'/>

//         </div>
//         <button className='button_Next' type='Submit' onClick={Next}>انشاء حساب</button>

        
//         <a className='sigle_in' href="#">تسجيل الذخول</a> 

//        </div>
//       </from>
      
//     </div>
//    </div>
//   )
// }























import "./Login.css"
import Slogan from"./Slogan"
import React, { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( username==="") {
      document.getElementById("eroor").innerText="ادخال اسم المستحدم"
    
          }
    else if (email ==="") {
      document.getElementById("erooremail").innerText="ادخال اسم الجيميل"
    } 
    else if (password ==="") {
      document.getElementById("eroorpassword").innerText="ادخال كلمة المرور"
    } 
    else if(isLogin===true){
      window.location.href="http://localhost:8080/MyHeader";
      
    }
    else {
      alert("تم التسجيل بنجاح");
    }
 
  };

  return (
    <div className="Sl">

      <div className='login-new' >
      <h2 className='list-single'>{isLogin ? 'تسجيل الدخول' : 'تسجيل جديد'}</h2>
      <div>
        <button className="button-logen" onClick={() => setIsLogin(true)}>تسجيل الدخول</button>
        <button className="button-lo" onClick={() => setIsLogin(false)}>تسجيل جديد</button>
      </div>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          
         <div className="gro-Submit">
          <span id="eroor"></span>
          <input
          className='input-single'
            type="text" placeholder="اسم المستخدم"value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
         </div>
        )}
         <div className="gro-Submit">
         <span id="erooremail"></span>
         <input
        className='input-single'
          type="email"
          placeholder="البريد الإلكتروني" value={email}
          onChange={(e) => setEmail(e.target.value)}
        /></div>
       
       <div className="gro-Submit">
       <span id="eroorpassword"></span>
       <input type="password"
        className='input-single' 
        placeholder="كلمة المرور" value={password} 
        onChange={(e) => setPassword(e.target.value)}
        /></div>
       
        <button className="submit" type="submit" >{isLogin ? 'تسجيل الدخول' : 'تسجيل'}</button>

        {isLogin && (
         <div className="ds">
          <div className="box-bii"> <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-facebook bilogen" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg></div>
         
<div className="box-bii"><svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-twitter bilogen" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg></div>


<div className="box-bii"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-google bilogen" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
</svg></div>


<div className="box-bii"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github bilogen " viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg></div>


         </div>
         
        )}
      </form>
    </div>
    <Slogan/>

    </div>
  );
};

export default Auth;









// import React from 'react'

// export default function Login() {
  
//   return (

//        <div class="form-inner">
//          <div className='r'>
//          <form action="#" class="login">
//              <div class="field">
//                 <input type="text" placeholder="Email Address" required/>
//              </div>
//              <div class="field">
//                 <input type="password" placeholder="Password" required/>
//              </div>
//              <div class="pass-link">
//                 <a href="#">Forgot password?</a>
//              </div>
//              <div class="field btn">
//                 <div class="btn-layer"></div>
//                 <input type="submit" value="Login"/>
//              </div>

//              <div class="signup-link">
//                 Not a member? <a href="">Signup now</a>
//              </div>
//           </form>

//           <form action="#" class="signup">
//              <div class="field">
//                 <input type="text" placeholder="Email Address" required/>
//              </div>
//              <div class="field">
//                 <input type="password" placeholder="Password" required/>
//              </div>
//              <div class="field">
//                 <input type="password" placeholder="Confirm password" required/>
//              </div>
//              <div class="field btn">
//                 <div class="btn-layer"></div>
//                 <input type="submit" value="Signup"/>
//              </div>
//           </form>
//          </div>
//        </div>

//   )
// }













// <div class="wrapper">
// <div class="title-text">
//    <div class="title login">
//       Login Form
//    </div>
//    <div class="title signup">
//       Signup Form
//    </div>
// </div>
// <div class="form-container">
//    <div class="slide-controls">
//       <input type="radio" name="slide" id="login" checked/>
//       <input type="radio" name="slide" id="signup"/>
//       <label for="login" class="slide login">Login</label>
//       <label for="signup" class="slide signup">Signup</label>
//       <div class="slider-tab"></div>
//    </div>