import React, { useState } from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  const infoDiv = document.querySelector('.info')
  const handlInfo = () => {
    setShowInfo(!showInfo)
    // infoDiv.classList.toggle('.show-info')
    // console.log(infoDiv)
  }
  return (
    <article className='single-question'>
      <header>
        <p className='title'>{title}</p>
        <button className='question-btn' onClick={() => handlInfo()}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p className='info'>{showInfo && info}</p>
    </article>
  )
}

export default SingleQuestion
