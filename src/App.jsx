import React, { useState } from 'react'
import './index.css'

const App = () => {
  const [dob, setDob] = useState(0)
  const [age, setAge] = useState(0)

  const handlecalc = (e) => {
    if (dob === 0) {
      alert('Kindly input your DOB first.')
    } else {
      e.preventDefault()

      let todayDate = new Date()
      let year1 = todayDate.getFullYear()

      let dateOfBirth = new Date(dob)
      let year2 = dateOfBirth.getFullYear()

      setAge(year1 - year2)
    }

  }

  const handleReset = () => {
    setAge(0)
    setDob(0)
  }

  return (
    <div className='w-full h-screen bg-blue-400 p-3'>
      <div className="w-full h-full bg-slate-200 rounded-md flex justify-center items-center">
        <div className="w-3/5 h-3/4  bg-white rounded-md">
          <div className="text pt-14">
            <h1 className='text-3xl font-bold mb-4'>Age Calculator</h1>
            <p>The Age Calculator can determine the age or interval between two dates. The Calculated will be displayed in years.</p>
          </div>
          <div className="main w-full  h-3/5 mt-16 flex justify-evenly">
            <div className="left  h-full w-2/5">
              <p className='text-3xl font-bold' style={{ textAlign: 'left' }}>Date of birth.</p>
              <form onSubmit={handlecalc} style={{ textAlign: 'left' }}>
                <input
                  type="date"
                  id="date"
                  onChange={(e) => setDob(e.target.value)}
                  className="w-3/4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-14  mb-10"
                />
                <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Calculate</button>
                <button onClick={handleReset} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" >Reset</button>
              </form>
            </div>
            <div className="right bg-slate-200 h-3/5 w-2/5 rounded-md shadow-lg flex flex-col justify-evenly">
              <p className='text-3xl font-bold'>Your Age is</p>
              <p className='text-5xl font-bold text-blue-600'>{age === 0 ? "" : age}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
