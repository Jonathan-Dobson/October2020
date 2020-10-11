import React from 'react'

export default function Login ({ Go, Back }) {
return <p>Signin<br />
  <Go to='/pay'>Continue to Pay</Go>
  <Go to='/profile'>Profile</Go>
  <Back>Back</Back>
</p>
}