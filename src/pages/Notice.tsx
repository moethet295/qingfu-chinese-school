import NoticeCard from '../components/NoticeCard';
import {notices} from '../data/notice';


function Notice() {
  return (
    <div className="w-full bg-gray-100 min-h-screen ">
      <div className="max-w-7xl mx-auto px-6 py-6">

        <div className="grid grid-cols-3 gap-8">
            {notices.map((notice)=> (
              <NoticeCard key={notice.id} notice={notice} />
            ))}
        </div>


      </div>
    </div>
  )
}

export default Notice
