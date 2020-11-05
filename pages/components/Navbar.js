import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';


export default function () {
    const router=useRouter();
    function isActive(route){
        if(route===router.pathname){
            return 'active'
        }else{
            return ''
        }

    }
     

    return (
        <nav>
    <div className="nav-wrapper #448aff blue accent-2">
      <Link href="/"><a className="brand-logo left">Logo</a></Link>
      <ul id="nav-mobile" className="right ">
       <li className={isActive("/login")}><Link href="/login"><a>Login</a></Link></li> 
        <li className={isActive("/signup")}><Link href="/signup"><a> Sign Up</a></Link></li>
        <li className={isActive("/settings")}><Link href="/settings"><a>Product Setup</a></Link></li>
        <li className={isActive("/about")}> <Link href="/about"><a>About</a></Link></li>
        
      </ul>
    </div>
  </nav>
   
    )
}
