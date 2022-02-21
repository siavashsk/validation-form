import React from 'react'
import Input from './components/Input'
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MIN,
  VALIDATOR_MAX,
  VALIDATOR_EMAIL,
} from './utils/validators'

function App() {
  return (
    <div className="app">
      <Input
        type="text"
        label="نام"
        id="name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="نام باید معتبر باشد"
      />
      <Input
        type="text"
        label="نام کاربری"
        id="username"
        validators={[VALIDATOR_MINLENGTH(4), VALIDATOR_MAXLENGTH(12)]}
        errorText="نام کاربری باید معتبر باشد"
      />
      <Input
        type="text"
        label="ایمیل"
        id="email"
        validators={[VALIDATOR_EMAIL()]}
        errorText="ایمیل باید معتبر باشد"
      />
      <Input
        type="text"
        label="سن"
        id="age"
        validators={[VALIDATOR_MIN(18), VALIDATOR_MAX(40)]}
        errorText="سن باید معتبر باشد"
      />
      <button className="btnSend">ارسال</button>
    </div>
  )
}

export default App
