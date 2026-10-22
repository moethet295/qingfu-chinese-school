import ResultCard from '../components/ResultCard'
import {results} from '../data/result'

function Results() {
  return (
    <div className="w-full bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-6">

        <div className="grid grid-cols-5 gap-8 mt-5">
          {results.map((result)=> (<ResultCard key={result.id} result={result} />))}
        </div>

        </div>
    </div>
  )
}

export default Results
