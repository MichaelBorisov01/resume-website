import Navigation from './components/Navigation'
import Person from "./components/Person.tsx";

function App() {

  return (
        <div className="overflow-x-hidden overflow-y-hidden text-neutral-300 antialised">
            <div className="fixed top-0 -z-10 h-full w-full">
                <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            </div>
            <div className="container mx-auto px-8">
                <Navigation />
                <Person />
            </div>
        </div>
  )
}

export default App
