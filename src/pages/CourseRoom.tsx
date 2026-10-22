import ChatBox from "./ChatBox";

function CourseRoom() {
  return (
    <div className="flex w-full h-full">

      {/* Left - Course / Chat */}
        <div className="w-[75%] bg-gray-100 h-full">
          <ChatBox />
        </div>

      {/* Right - AI Assistant */}
      <div className="w-[25%] flex-1 border-l border-gray-300 bg-white h-full">
        AI Assistant
      </div>

    </div>
  );
}

export default CourseRoom;
