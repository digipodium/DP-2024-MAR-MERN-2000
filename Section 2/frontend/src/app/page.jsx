import React from 'react'

const Home = () => {
  return (
    <div>
        <h1 style={{ textAlign: 'center', fontSize: 50 }}>Welcome to Homepage</h1>

        <img src="/next.svg" alt="" />
        <hr /><br /><input type="text" />
    
        <button className='mybtn'>My Button</button>
        <button className='btn btn-primary'>Lets Check</button>

    </div>
  )
}

export default Home;