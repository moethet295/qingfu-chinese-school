import { useState } from 'react';
import type { Notice } from '../types/notice';

interface NoticeCardProps {
  notice: Notice;
}



function NoticeCard({notice}: NoticeCardProps) {

  const [showImage, setShowImage] = useState(false);

  return (
    <div className='bg-gray-300 mt-6 p-5 rounded-2xl'>

      <h2 className='mt-2 mb-2 font-bold text-xl items-center'>{notice.title}</h2>

      <div>  
        <img src={notice.image} alt={notice.title}
        className='w-full h-80 object-cover  cursor-pointer' onClick={()=>setShowImage(true)}
        />
      </div>

      <div className='mt-4'>  
      <p className='text-md '>
        <span className='font-semibold'>Description: </span>{" "}
        {notice.description}
      </p>

      <p className='text-md'>
        <span className='font-semibold'>Date: </span>{" "}
        {notice.date}
      </p>
      </div>

      {showImage && (
        <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50' onClick={()=> setShowImage(false)}>
          <img src={notice.image} className='max-w-[90vw] max-h-[90vh] object-contain' />
        </div>
      )}
      
    </div>
    
  )
}

export default NoticeCard
