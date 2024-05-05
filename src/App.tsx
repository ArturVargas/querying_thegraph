import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Dododex from './components/dododex';

const subgraphId = '5G1mhjXywQyo482AtNrmhXi6sg75f51QCAFxydP4iEoY';

const client = new Client({
  url: `https://gateway-arbitrum.network.thegraph.com/api/${import.meta.env.VITE_API_KEY}/subgraphs/id/${subgraphId}`,
  exchanges: [cacheExchange, fetchExchange],
});

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Provider value={client}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Querying The Graph</h1>
      <Dododex />
    </Provider>
  )
}

export default App
