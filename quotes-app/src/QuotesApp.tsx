import { Route } from 'react-router'
import { Navigate, Routes } from 'react-router-dom'
import { Quote, Quotes } from './pages'
import { Navbar } from './componets/Navbar'

interface Props {}

export const QuotesApp = ({}: Props) => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Quotes />} />
        <Route path="/quote/:id" element={<Quote />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}
