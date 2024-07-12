import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { OrdersProvider } from './contexts/OrdersProvider'
import Router from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <OrdersProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </OrdersProvider>
  )
}

export default App
