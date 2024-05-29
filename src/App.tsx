import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'
import './App.css'
import MainLayout from './pages/MainLayout'
import ThemeProvider from './components/ThemeContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { lazy } from 'react'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 5,
        },
    },
})

const HomePageLazy = lazy(() => import('./pages/HomePage'))
const WishListPageLazy = lazy(() => import('./pages/WishListPage'))
const GamePageLazy = lazy(() => import('./pages/GamePage'))

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<MainLayout />}>
            <Route path='/' element={<HomePageLazy />} />
            <Route path='/wishlist' element={<WishListPageLazy />} />
            <Route path='/game/:id' element={<GamePageLazy />} />
        </Route>
    )
)
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme='dark' storageKey='custom-theme'>
                <RouterProvider router={router} />
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default App
