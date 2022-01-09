import Image from 'next/image'
import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { BiBuildings } from 'react-icons/bi'
import { IoLocationOutline } from 'react-icons/io5'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsLink45Deg } from 'react-icons/bs'

const ProfileInfo = ({ user }) => {
    console.log(user)
    return (
        <div className='py-10 px-8 max-w-[380px]'>
            <div className="flex items-center gap-3">
                <Image 
                    src={user.avatarUrl}
                    alt={user.login}
                    height={80}
                    width={80}
                    className='rounded-full'
                />
                <div className="">
                    <h1 className='text-2xl font-bold'>
                        <a 
                            href={user.url}
                            target="_blank"
                            rel='norefarer'
                        >
                            {'@'}{user.login}
                        </a>
                    </h1>
                    <h2 className='font-normal text-slate-700'>{user.name}</h2>
                </div>
            </div>
            <p className="mt-2">{user.bio}</p>
            <div className="flex items-center mt-2">
                <FiUsers />
                <p className="mx-2">
                    {user.followers.totalCount} <span className="text-gray-600">followers</span>
                </p>
                ·
                <p className="ml-2">
                    {user.following.totalCount} <span className="text-gray-600">following</span>
                </p>
            </div>
            <div className="text-gray-600 border-t-[1px] border-zinc-300 mt-6">
                {user.company &&
                    <div className="flex items-center gap-1 mt-2">
                        <BiBuildings size={20}/>
                        {user.company}
                    </div>
                }
                {user.location &&
                    <div className="flex items-center gap-1 mt-2">
                        <IoLocationOutline size={20} />
                        {user.location}
                    </div>
                }
                {user.twitterUsername &&
                    <a 
                        href={`https://twitter.com/${user.twitterUsername}`}
                        target="_blank"
                        rel='norefarer'
                        className="flex items-center gap-1 mt-2"
                    >
                        <AiOutlineTwitter size={20} />
                        <span className="hover:underline hover:text-[#0969da]">
                            {'@'}{user.twitterUsername}
                        </span>
                    </a>
                }
                {user.websiteUrl && 
                    <a 
                        href={user.websiteUrl}
                        target="_blank"
                        rel='norefarer'
                        className="flex items-center gap-1 mt-2"
                    >
                        <BsLink45Deg size={22} />
                        <span className='hover:underline hover:text-[#0969da]'>
                            {user.websiteUrl}
                        </span>
                    </a>
                }
            </div>
        </div>
    )
}

export default ProfileInfo