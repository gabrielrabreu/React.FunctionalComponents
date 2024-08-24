import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface ImgLinkProps {
  url: string;
  src: string;
  alt: string;
  className: string;
}

const ImgLink: React.FC<ImgLinkProps> = ({ url, src, alt, className }) => {
  return <a href={url} target="_blank">
    <img src={src} className={className} alt={alt} />
  </a>
}

const Card: React.FC = () => {
  const [count, setCount] = useState(0);

  return <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      {count > 10 ? `count is ${count} ✅` : `count is ${count}`}
    </button>
    <p>
      Edit <code>src/App.tsx</code> and save to test HMR
    </p>
  </div>
}

const AppComposition: React.FC = () => {
  return (
    <>
      <div>
        <ImgLink url="https://vitejs.dev" src={viteLogo} alt="Vite logo" className="logo" />
        <ImgLink url="https://react.dev" src={reactLogo} alt="React logo" className="logo react" />
      </div>
      <h1>Vite + React (Composition)</h1>
      <Card />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default AppComposition
