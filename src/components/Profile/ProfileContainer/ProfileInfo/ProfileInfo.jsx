import React from 'react'
import UserInfo from './UserInfo/UserInfo'
import UserSkillInfo from './UserSkillInfo/UserSkillInfo'

export default function ProfileInfo({tempUser}) {
  return (
    <div className='lg:w-[70%] md:w-[70%] p-4 flex flex-col gap-3'>
      <UserInfo tempUser={tempUser} />
      <UserSkillInfo tempUser={tempUser}/>
    </div>
  )
}
