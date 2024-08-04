import { productType } from "@/entity/product.type";
import ProductsView from "@/views/product/Main"

type PropsProduct = {
    products: productType[]
}

const ProductPage = (props: PropsProduct ) => {
    const {products} = props
    return (
        <>
            <ProductsView products={products}/>
        </>
    )
}

export default ProductPage;

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/product') // ketika menggunaan getStaticProps alamat url diisi dengan lengkap
    const response = await res.json()
    return {
        props: {
            products: response.data
        }
    }
}   