import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "@components/Header/Header"
import Footer from "@components/Footer/Footer"
import { publicRoutes } from './routes'
import { SidebarProvider } from '@contexts/SidebarProvider'
import Sidebar from '@components/Sidebar/Sidebar.jsx'

function App() {


  return (
    <SidebarProvider>
      <Router>
        <Sidebar />
        <div className="app">
          <Header />
          <main>
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                return <Route key={index} path={route.path} element={<Page />} />
              })}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </SidebarProvider>
  )
}

export default App
