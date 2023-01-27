import { Route, useLocation } from 'react-router'
import { Navigate, Routes } from 'react-router-dom'
import { Quote, Quotes } from './pages'
import { Navbar } from './componets/Navbar'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './context/ThemeContext'

interface Props {}

export const QuotesApp = ({}: Props) => {
  const { colors } = useContext(ThemeContext)

  const [isTheme, setIsTheme] = useState(true)

  const { pathname } = useLocation()

  useEffect(() => {
    pathname.includes('quote') ? setIsTheme(false) : setIsTheme(true)
  }, [pathname])

  return (
    <div style={{ backgroundColor: colors.background }}>
      <Navbar isTheme={isTheme} />

      <Routes>
        <Route path="/" element={<Quotes />} />
        <Route path="/quote/:id" element={<Quote />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}
