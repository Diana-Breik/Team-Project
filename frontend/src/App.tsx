import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {

        const [data, setData] = useState<string>('');
        useEffect(() => {
                axios.get("/api")
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.error('Fehler bei der API-Anfrage:', error);
                });
        },[]);

  return(

      <>
          <p>{data}</p>
      </>
  )
}

export default App
