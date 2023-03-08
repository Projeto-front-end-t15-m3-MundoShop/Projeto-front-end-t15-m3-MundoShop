import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../providers/UserContext"
import IMG from '../../assets/Ellipse 3.svg'
import LogoMundoShop from '../../components/LogoMundoShop'

const Dashboard = () => {
  const {user, getUser, userLogout} = useContext(UserContext)
  const navigate = useNavigate()

useEffect(() => {
  const token = localStorage.getItem('@TOKEN')
  if(token){
    getUser()
  }else{
    navigate('/')
  }
}, [])

  return (
    <>
      <header>
        <LogoMundoShop/>
        <nav>
          <a href='/'>Início</a>
          <p onClick={() => userLogout()}>Sair</p>
        </nav>
      </header>
      <main>
        <section>
          <img src={user?.avatar} alt={user?.name}/>
          <div>
            <h1>{user?.name}</h1>
            <p>{user?.email}</p>
          </div>
        </section>
        <section>
          <nav>
            <div>
              <img src={IMG}/>
              <h2>Meus pedidos</h2>
            </div>
            <div>
              <img src={IMG}/>
              <h2>Minhas vendas</h2>
            </div>
            <div>
              <img src={IMG}/>
              <h2>Criar uma venda</h2>
            </div>
          </nav>
        </section>
      </main>
    </>
  )
}

export default Dashboard