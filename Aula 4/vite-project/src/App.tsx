// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React, { useState } from 'react'
import Card from './components/Card'  
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleCardClick = () => {
    alert('Card clicado!')
  }

  return (
    <div className="App">
      <h1>Cards</h1>
      
      <div className="cards-container">
        <Card
          title="Card 1"
          description="MiauMiauMiau"
          imageUrl="data:image/jpeg;base64,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"
          onClick={handleCardClick}
        />
        <Card
          title="Card 2"
          description="Miauuuuuuuu"
          imageUrl="data:image/jpeg;base64,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"
          onClick={handleCardClick}
        />
      </div>
    </div>
  )
}

export default App
