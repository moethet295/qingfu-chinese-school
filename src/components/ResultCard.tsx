import type { Result } from '../types/result';
import { useState } from 'react';

interface ResultCardProps {
  result: Result;
}


function ResultCard({result}: ResultCardProps) {

  const [showImage, setShowImage] = useState(false);

  return (
    <div className="bg-gray-200 rounded-2xl p-5">
      
      <h2 className ="text-xl font-bold">{result.title}</h2>

      <div> 
      <img src={result.image} alt={result.title} 
        className="w-full h-50 object-cover"
        onClick={()=> setShowImage(true)}/>
      </div>

      <div className="mt-4">
        <p className='text-md '>
          <span className='font-semibold'>Description: </span>{" "}
          {result.description}
      </p>

        <p className='text-md'>
          <span className='font-semibold'>Date: </span>{" "}
          {result.date}
        </p>
      </div>

      {showImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50
        " onClick={()=> setShowImage(false)}>
          <img src={result.image} className='max-w-[90vw] max-h-[90vh] object-contain '/>
        </div>
      )}

    </div>
  )
}

export default ResultCard
