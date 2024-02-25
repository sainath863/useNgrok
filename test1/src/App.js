import axios from 'axios';
import React, { useEffect } from 'react'

const App = () => {
  const [data, setData] = React.useState([])

  useEffect(()=>{
    axios.get('https://ffcb-2401-4900-1c30-7e92-9dfc-ac43-b106-8eb8.ngrok-free.app',{
     headers: {
      'ngrok-skip-browser-warning': true, // added to support locally hosting and using custom apps using ngrok
     }
    })
    .then(data => {
      console.log('data is ', data)
      setData(data)
    })
  },[]);
  
  return (
    <div>
      <h1>Data from port 3001</h1>
      <p>{data?.data?.age }</p>
    </div>
  )
}

export default App