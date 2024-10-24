import type { RootState } from '../../store'
import { PlusOutlined } from '@ant-design/icons'
import { Button, DatePicker } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../store/counterSlice'

const Home: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1 className="text-2xl font-bold">首页</h1>
      <p>
        计数:
        {count}
      </p>
      <Button type="primary" onClick={() => dispatch(increment())} icon={<PlusOutlined />}>增加</Button>
      <Button type="primary" onClick={() => dispatch(decrement())}>减少</Button>

      <DatePicker />
    </div>
  )
}

export default Home
