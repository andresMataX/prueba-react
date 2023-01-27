import { Route } from 'react-router'
import { Navigate, Routes } from 'react-router-dom'
import { Quote, Quotes } from './pages'
import { Navbar } from './componets/Navbar'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

interface Props {}

export const QuotesApp = ({}: Props) => {
  const { colors } = useContext(ThemeContext)

  return (
    <div
      style={{ backgroundColor: colors.background }}
      className="h-screen w-screen"
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Quotes />} />
        <Route path="/quote/:id" element={<Quote />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}
