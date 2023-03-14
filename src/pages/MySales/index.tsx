import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import MySalesImgModal from "../../components/DashboardModal/MySalesImgModal"
import LogoMundoShop from "../../components/LogoMundoShop"
import MySalesCard from "../../components/MySalesCard"
import { ProductsContext } from "../../providers/productsContext"
import { UserContext } from "../../providers/UserContext"
import { api } from "../../Services/api"
import { StyledHeaderDashboard } from "../Dashboard/style"
import {
  StyledMySalesHeaderDiv,
  StyledMySalesMain,
  StyledMySalesUl,
} from "./style"

export const MySalesPage = () => {
  const { getUser } = useContext(UserContext)
  const { setMySales, mySales } = useContext(ProductsContext)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN")
    const userId = localStorage.getItem("@USERID")
    if (token) {
      getUser()
    } else {
      navigate("/login")
    }

    const mySales = async () => {
      try {
        const response = await api.get(`/products?userId=${userId}`)
        setMySales(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    mySales()
  }, [])

  if (mySales.length === 0) {
    return (
      <>
        <StyledHeaderDashboard>
          <LogoMundoShop />
          <nav>
            <a href="/">Início</a>
            <p onClick={() => history.back()}>Voltar</p>
          </nav>
        </StyledHeaderDashboard>
        <StyledMySalesMain>
          <StyledMySalesHeaderDiv>
            <img
              src="./src/assets/botaoVoltar.png"
              onClick={() => history.back()}
            />
            <h2>Minhas vendas</h2>
          </StyledMySalesHeaderDiv>
          <div>
            <StyledMySalesUl>
              <p>Sem anúncios cadastrados</p>
            </StyledMySalesUl>
          </div>
          <MySalesImgModal />
        </StyledMySalesMain>
      </>
    )
  } else {
    return (
      <>
        <StyledHeaderDashboard>
          <LogoMundoShop />
          <nav>
            <a href="/">Início</a>
            <p onClick={() => history.back()}>Voltar</p>
          </nav>
        </StyledHeaderDashboard>
        <StyledMySalesMain>
          <StyledMySalesHeaderDiv>
            <img
              src="./src/assets/botaoVoltar.png"
              onClick={() => history.back()}
            />
            <h2>Minhas vendas</h2>
          </StyledMySalesHeaderDiv>
          <div>
            <StyledMySalesUl>
              <MySalesCard />
            </StyledMySalesUl>
          </div>
          <MySalesImgModal />
        </StyledMySalesMain>
      </>
    )
  }
}
