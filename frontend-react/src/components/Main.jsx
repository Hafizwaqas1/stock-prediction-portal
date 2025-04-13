import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Button from './Button'

const Main = () => {
  return (
    <>
    
    <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Stock Prediction Portal</h1>
            <p className='text-light lead'>The Stock Prediction Portal is an intelligent web platform designed to provide users with data-driven insights into the stock market. Leveraging machine learning and real-time financial data, the portal allows users to analyze historical trends, view live stock information, and receive predictive insights for informed investment decisions.</p>
            <Button  text="Login" class="btn-outline-info" />

        </div>

    </div>
    </>
  )
}

export default Main