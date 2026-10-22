import type { Member } from "../../types/member"

interface MemberCardProps {
  member: Member;
}

function MemberCard({member}: MemberCardProps) {
  return (
    <div className="flex p-4 gap-4 items-center hover:bg-gray-400 border-b">
      
      <div className="flex justify-center h-10 w-10 rounded-full items-center bg-blue-300 text-blue-500">
        {member.avatar ? (
          <img  src={member.avatar} alt={member.name} className="w-full rounded-full h-full object-cover"/>
        ) : member.name.charAt(0)}

      </div>

      <div>
          <p className="font-bold text-l">{member.name}</p>
          <p className="text-sm text-black">{member.role}</p>
      </div>

    </div>
  )
}

export default MemberCard
