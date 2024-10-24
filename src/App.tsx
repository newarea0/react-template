import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'

function App() {
  return (
    <div className="App">
      <Button type="primary" icon={<PlusOutlined />}>
        Ant Design 按钮
      </Button>
    </div>
  )
}

export default App
