import type { MessageForm } from '../types/message'

interface MessageCardProps {
    message: MessageForm;
}

function MessageCard({message} : MessageCardProps) {
    
  return (
    <div className={message.sender === "Me" ? "mb-2 flex justify-end" : "mb-2 flex justify-start"}>
        <div className={message.sender === "Me" ? "px-4 py-2 bg-blue-500 text-white rounded-2xl" : 
            "px-4 py-2 bg-white shadow rounded-2xl"}>
            {message.sender !== "Me" && <p className='text-sm text-gray-500'>{message.sender}</p>}
            {message.text}
        </div>
    </div>
  )
}

export default MessageCard
