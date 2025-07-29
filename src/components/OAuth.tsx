import React, { useMemo, useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import type { CredentialResponse } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const OAuth = () => {
  const handleLogin = (credentialResponse: CredentialResponse) => {
    // handle login response here
    console.log(credentialResponse);
  };

  const [credentialResponse, setCredentialResponse] = useState<CredentialResponse>();

  `The hook will store in cache the result of some operation with a dependency on the credential response
  It will decode the content of the response and return it in the user variable`
  const user = useMemo( () => {

    if(!credentialResponse?.credential){
        return;
    }
    else{
      console.log(credentialResponse);
      return jwtDecode(credentialResponse.credential);
    }

  },[credentialResponse])

  return (
    <div>
        <GoogleLogin
          theme="filled_black"
          shape="pill"
          onSuccess={credentialResponse => {
            setCredentialResponse(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
        <div>
          <img 
          src={user ? user.picture : undefined} alt='image'/>
          <p>Nombre usuario {user ? user.name : undefined}</p>
        </div>
    </div>
  )
}

export default OAuth
