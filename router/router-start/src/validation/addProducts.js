import * as Yup from "yup";

let addproductSchema = Yup.object({
    title: Yup.string().required(),
    link: Yup.string().required(),
    price: Yup.number().required(),
    brand : Yup.string().required(),
    description : Yup.string().required(),
})

export default addproductSchema