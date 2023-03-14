import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import LogoMundoShop from "../../components/LogoMundoShop";
import { StyledDashboardMain, StyledHeaderDashboard, Link } from "./style";
import EditProfileModal from "../../components/DashboardModal/EditProfileModal";
import EditAvatarModal from "../../components/DashboardModal/EditAvatarModal";
import minhasVendasIcon from "../../assets/minhasVendasIcon.svg";
import meusPedidosIcon from "../../assets/meusPedidosIcon.svg";
import criarVendaIcon from "../../assets/criarVendaIcon.svg";
import { FaEdit } from "react-icons/fa";
import CreateSale from "../../components/CreateSale";
import { ProductsContext } from "../../providers/productsContext";
import defautlAvatar from "../../assets/defautlAvatar.png";

const Dashboard = () => {
  const {
    user,
    getUser,
    userLogout,
    editProfileModal,
    setEditProfileModal,
    setEditAvatarModal,
    editAvatarModal,
  } = useContext(UserContext);
  const { setCreateSaleModal, createSaleModal } = useContext(ProductsContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      getUser();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <StyledHeaderDashboard>
        <LogoMundoShop />
        <nav>
          <a href="/">Início</a>
          <p onClick={() => userLogout()}>Sair</p>
        </nav>
      </StyledHeaderDashboard>
      <StyledDashboardMain>
        <section className="user__header">
          <div>
            {user?.avatar ? (
              <img src={user?.avatar} alt={user?.name} />
            ) : (
              <img src={defautlAvatar} alt="Avatar" />
            )}
            <button onClick={() => setEditAvatarModal(!editAvatarModal)}>
              Alterar avatar
            </button>
          </div>
          <div>
            <h1>{user?.name}</h1>
            <p>{user?.email}</p>
            <p>{user?.adress}</p>
          </div>
          <span onClick={() => setEditProfileModal(!editProfileModal)}>
            Editar perfil <FaEdit />
          </span>
        </section>
        <section className="user__nav--container">
          <nav>
            <div>
              <img src={meusPedidosIcon} />
              <h2>Meus pedidos</h2>
            </div>
            <Link to={"/mysales"}>
              <img src={minhasVendasIcon} />
              <h2>Minhas vendas</h2>
            </Link>
            <div onClick={() => setCreateSaleModal(!createSaleModal)}>
              <img src={criarVendaIcon} />
              <h2>Criar uma venda</h2>
            </div>
          </nav>
        </section>
      </StyledDashboardMain>
      <EditProfileModal />
      <CreateSale />
      <EditAvatarModal />
    </>
  );
};

export default Dashboard;
