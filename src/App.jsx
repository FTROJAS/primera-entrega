import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titulo from " . components/Titulo"

function App() {
  const saludo = "Hola usuario"

  return (
    <div>
      <h1>{saludo}</h1>
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fpin%2F388083692905664979%2F&psig=AOvVaw0hJ_rFktgAEITkFFXizEWO&ust=1719668768653000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOiNv8K3_oYDFQAAAAAdAAAAABAEhttps://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fpin%2F388083692905664979%2F&psig=AOvVaw0hJ_rFktgAEITkFFXizEWO&ust=1719668768653000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOiNv8K3_oYDFQAAAAAdAAAAABAE" alt="" />
    
      <> <Titulo>
      </Titulo> </>
      <><Titulo>
        </Titulo></>








    </div>
  )
}

export default App
