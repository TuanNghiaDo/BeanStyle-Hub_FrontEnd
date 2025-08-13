import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "@components/Header/Header"
import Footer from "@components/Footer/Footer"
import { publicRoutes } from './routes'
import { SidebarProvider } from '@contexts/SidebarProvider'
import Sidebar from '@components/Sidebar/Sidebar.jsx'
import { ToastProvider } from '@contexts/ToastProvider'
import StoreProvider from '@contexts/StoreProvider'

function App() {


  return (
    <StoreProvider>
      <ToastProvider>
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
      </ToastProvider>
    </StoreProvider>
  )
}

export default App
