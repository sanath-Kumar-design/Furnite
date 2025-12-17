import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { FaInfo } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SideMenu({ setSidebar }) {

    const navigate = useNavigate()

    const onClickHome = () => {
        navigate('/')
        setSidebar(false)
    }

    const onClickScroll = () => {
        const section = document.getElementById("Categories");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setSidebar(false)
    }
    return (
        <div className='bg-white h-screen'>
            <aside>
                <div onClick={() => setSidebar(false)} className='absolute left-2 top-4 text-xl cursor-pointer'><IoMdClose /></div>
                <div className='py-6 px-5'>
                    <button onClick={onClickHome} className='py-4 px-2 rounded-2xl hover:bg-gray-200 cursor-pointer flex items-center gap-2 mt-5 border-b w-full shadow-xl'><div><AiFillHome /></div>Home</button>
                    <Link onClick={onClickScroll} className='py-4 px-2 rounded-2xl hover:bg-gray-200 cursor-pointer flex items-center gap-2 mt-5 border-b w-full shadow-xl'><div> <IoMdContact /></div>Shop</Link>
                    <Link className='py-4 px-2 rounded-2xl hover:bg-gray-200 cursor-pointer flex items-center gap-2 mt-5 border-b w-full shadow-xl'><div><FaInfo /></div>Contact</Link>
                </div>
            </aside>
        </div>
    )
}
