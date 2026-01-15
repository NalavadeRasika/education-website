import React from 'react'
import { team } from '../../dummydata'

const TeamCard = () => {
  return (
    <>
      {team.map((val)=>(
        <div className='iteam shadow'>
            <div className='img'>
                <img src={val.cover} alt="" />
                <div className='overlay'>

                </div>
            </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
