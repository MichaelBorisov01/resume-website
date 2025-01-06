import Navigation from './components/Navigation'

function App() {

  return (
        <div className="overflow-x-hidden overflow-y-hidden text-neutral-300 antialised">
            <div className="fixed top-0 -z-10 h-full w-full">
                <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            </div>
            <div className="container mx-auto px-8">
                <Navigation />
            </div>
        </div>
  )
}

export default App
