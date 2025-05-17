import React from 'react'
import Sidebar from './sidebar'
import Feed from './feed'
import Suggestions from './Suggestions'

 function App() {
  return (
    <div className='d-flex vh-100'>
      <div className='w-20'><Sidebar/></div>
      <div  className="w-50"><Feed/></div>
      <div className='w-30'><Suggestions/></div>

    </div>
  )
}
/* w-25 w-50 w-75 w-100*/
export default App