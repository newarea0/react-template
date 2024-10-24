import type { RootState } from '../../store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../store/counterSlice'

const Home: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>首页</h1>
      <p>
        计数:
        {count}
      </p>
      <button type="button" onClick={() => dispatch(increment())}>增加</button>
      <button type="button" onClick={() => dispatch(decrement())}>减少</button>
    </div>
  )
}

export default Home
