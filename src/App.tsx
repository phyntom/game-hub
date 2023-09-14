import { lazy, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { Genre, Platform } from './model'
import { PlatformSelector } from './components/PlatformSelector'

const GameCardLazy = lazy(() => import('./components/GameCardList'))
const GenreListLazy = lazy(() => import('./components/GenreList'))

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
    return (
        <Layout>
            <div className='grid col-span-1 md:grid-cols-6 lg:grid-cols-8 gap-2'>
                <div className='md:col-span-1 lg:col-span-1'>
                    <GenreListLazy
                        onItemSelect={(genre: Genre) => {
                            setSelectedGenre(genre)
                        }}
                        selectedGenre={selectedGenre}
                    />
                </div>
                <div className='md:col-span-5 lg:col-span-7'>
                    <PlatformSelector
                        currentPlatform={selectedPlatform}
                        onItemSelect={(platform: Platform) => {
                            setSelectedPlatform(platform)
                        }}
                    />
                    <GameCardLazy
                        selectedPlatform={selectedPlatform}
                        selectedGenre={selectedGenre}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default App
