import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-Examples/MultipleCustomHooks'
// import { Memorize } from './04-Memo/Memorize'
// import { HooksApp } from './HooksApp'
import { MemoHook } from './04-Memo/MemoHook'
import { CallBackHook } from './04-Memo/CallBackHook'


ReactDOM.createRoot(document.getElementById('root')).render(
    <CallBackHook />
)
