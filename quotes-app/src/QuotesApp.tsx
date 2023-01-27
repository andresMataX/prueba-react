import { Route, useLocation } from 'react-router'
import { Navigate, Routes } from 'react-router-dom'
import { Quote, Quotes } from './pages'
import { Navbar } from './componets/Navbar'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { IQuotes } from './interfaces/quotes'

interface Props {}

export const QuotesApp = ({}: Props) => {
  const { colors } = useContext(ThemeContext)

  const [isTheme, setIsTheme] = useState(true)
  const [quotes, setQuotes] = useState<IQuotes[]>([])

  const { pathname } = useLocation()

  useEffect(() => {
    pathname.includes('quote') ? setIsTheme(false) : setIsTheme(true)
  }, [pathname])

  return (
    <div
      style={{ backgroundColor: colors.background }}
      className="min-h-screen"
    >
      <Navbar isTheme={isTheme} />

      <Routes>
        <Route
          path="/"
          element={<Quotes quotes={quotes} setQuotes={setQuotes} />}
        />
        <Route path="/quote/:id" element={<Quote />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}
