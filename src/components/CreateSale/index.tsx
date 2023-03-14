import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useContext } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from "react-router-dom"
import Input from "../Input"
import { StyledForm } from "./styles"
import {
  ICreateSaleFormValues,
  ProductsContext,
} from "../../providers/productsContext"

const schema = yup.object({
  name: yup.string().required("Insira o nome do produto"),
  category: yup.string().required("Insira a categoria do produto"),
  description: yup.string().required("Insira uma descrição para o produto"),
  price: yup.string().required("Insira o preço do produto"),
})

const CreateSale = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateSaleFormValues>({
    resolver: yupResolver(schema),
  })

  const { createSale, setCreateSaleModal, createSaleModal } =
    useContext(ProductsContext)

  const submit: SubmitHandler<ICreateSaleFormValues> = (FormData) => {
    createSale(FormData)
  }

  if (createSaleModal) {
    return (
      <StyledForm>
        <div className="modal__container">
          <div className="modal__header">
            <span
              onClick={() => setCreateSaleModal(!createSaleModal)}
              className="back_button"
            >
              X
            </span>
            <h2>Criar uma venda</h2>
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <Input
              label={"Nome"}
              type={"text"}
              register={register("name")}
              placeholder={"Nome do produto"}
              errors={errors.name}
            />
            <Input
              label={"Categoria"}
              type={"text"}
              register={register("category")}
              placeholder={"Categoria do produto"}
              errors={errors.category}
            />
            <Input
              label={"Descrição"}
              type={"text"}
              register={register("description")}
              placeholder={"Descrição do produto"}
              errors={errors.description}
            />
            <Input
              label={"Preço"}
              type={"text"}
              register={register("price")}
              placeholder={"Preço do produto"}
              errors={errors.price}
            />
            <button type="submit">Criar produto</button>
            <Link to={"/dashboard"}>Voltar</Link>
          </form>
        </div>
      </StyledForm>
    )
  } else {
    return null
  }
}

export default CreateSale
