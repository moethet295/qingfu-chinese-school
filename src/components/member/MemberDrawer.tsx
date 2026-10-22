import {members} from "../../data/member"
import { X } from "lucide-react"
import MemberCard from "./MemberCard"
import MemberSearchBar from "../MemberSearchBar"
import { useState } from "react"

interface MemberDrawerProps {
    isOpen: boolean,
    onClose: () => void,
    courseName: string
}

function MemberDrawer(
    {isOpen, onClose, courseName} : MemberDrawerProps
) {

    const [search, setSearch] = useState("");
    const [keyword, setKeyword] = useState("");

    const courseMember = members.filter((member)=> member.courseName === courseName);

    const memberSearch = courseMember.filter((member) =>
        member.name.toLowerCase().replaceAll("-", "").replaceAll(" ", "").includes(
            keyword.toLowerCase().replaceAll("-", "").replaceAll(" ", "")));

    
  return (
    <> 
    {isOpen && (<div className="fixed inset-0 z-40 bg-black/50" onClick={onClose}/>)}
    <div className={`fixed left-0 top-0 w-80 flex flex-col h-screen p-4 bg-gray-500 z-50 transition-transform duration-300 
      gap-5  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>

      <div className="flex items-center justify-between gap-5">
        <p className="font-semibold text-lg">Member ({courseMember.length}) </p>

        <button type="button" onClick={onClose}><X className="w-5 h-5"/></button>
        
      </div>

      <MemberSearchBar search={search} setSearch={setSearch}
        onSearch={()=> setKeyword(search)}/>


      <div className="flex-1 min-h-0 overflow-y-auto">
        {memberSearch.length > 0 ? (
          memberSearch.map((member)=> (
            <MemberCard key={member.id} member={member}/>
          ))
        ) : (<p className="text-gray-500">No found Member</p>)}
      </div>
    </div>
    </>
  )
}

export default MemberDrawer
