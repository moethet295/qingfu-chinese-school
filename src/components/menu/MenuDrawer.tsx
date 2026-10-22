import {X} from "lucide-react"
import courses from "../../data/course"
import MenuCard from "./MenuCard"
import { useState } from "react";
import { members } from "../../data/member";
import MemberSearchBar from "../MemberSearchBar";


interface MenuDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

function MenuDrawer({isOpen,onClose}: MenuDrawerProps) {

  return (
    <> 
    {isOpen && (<div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />)}
    <div className={ `fixed inset-0 top-0 left-0 z-50 h-screen w-80 bg-green-500 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`} >
        <div className="flex items-center justify-between p-3">
            <p className="font-semibold text-l">Course: {courses.length}</p>
            <button  type="button" onClick={onClose}>
                <X className="w-5 h-5"/>
            </button>
        </div>


        <div className="flex-1 sapce-y-0">
            {courses.map((course)=> 
                <MenuCard key={course.id} course={course}/>)}
        </div>
    </div>
    </>
  )
}

export default MenuDrawer
