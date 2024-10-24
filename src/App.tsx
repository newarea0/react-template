import { NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/home">首页</NavLink>
        </li>
        <li>
          <NavLink to="/about">关于</NavLink>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
