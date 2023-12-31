import { lazy, useState } from 'react'
import './App.css'
import NavBar from '@/components/NavBar'
import Layout from './components/Layout'
import { Genre, Platform } from './model'
import { PlatformSelector } from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import Footer from '@/components/Footer'

const GameCardLazy = lazy(() => import('./components/GameCardList'))
const GenreListLazy = lazy(() => import('./components/GenreList'))

export type GameQuery = {
    genre: Genre | null
    platform: Platform | null
    sortOrder: string | ''
    searchText: string
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
    return (
        <Layout>
            <div className='grid grid-rows-[auto,1fr,auto] gap-2 min-h-screen text-slate-700 dark:bg-slate-900 font-poppins dark:text-neutral-200'>
                <header className='p-2'>
                    <NavBar
                        onSearch={(searchText: string) => {
                            setGameQuery({ ...gameQuery, searchText })
                        }}
                    />
                </header>
                <div className='grid col-span-1 md:grid-cols-6 lg:grid-cols-8 gap-2'>
                    <div className='md:col-span-1 lg:col-span-1'>
                        <GenreListLazy
                            onItemSelect={(genre: Genre) => {
                                setGameQuery({ ...gameQuery, genre })
                            }}
                            selectedGenre={gameQuery.genre}
                        />
                    </div>
                    <div className='md:col-span-5 lg:col-span-7'>
                        <div className='flex items-start justify-start gap-4'>
                            <PlatformSelector
                                onItemSelect={(platform: Platform) => {
                                    setGameQuery({ ...gameQuery, platform })
                                }}
                            />
                            <SortSelector
                                onItemSelect={(sortOrder: string) => {
                                    setGameQuery({
                                        ...gameQuery,
                                        sortOrder,
                                    })
                                }}
                            />
                        </div>
                        <GameCardLazy gameQuery={gameQuery} />
                    </div>
                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default App
