import './assets/scss/style.scss'
import { Aside } from './components/aside/Aside'
import { Files } from './components/files/Files'
import { Header } from './components/header/Header'

function App() {


  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <main className='wrapper__main'>
          <Aside/>
          <Files/>
        </main>
      </div>

    </div>
  )
}

export default App
