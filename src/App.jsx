import { Route, Routes } from 'react-router'
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import BolsaPage from './pages/BolsaPage.jsx'
import BolsaDetallePage from './pages/BolsaDetallePage.jsx'
import NoEncontrada from './pages/NoEncontrada.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="bolsa-de-trabajo" element={<BolsaPage />} />
        <Route path="bolsa-de-trabajo/:id" element={<BolsaDetallePage />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}
