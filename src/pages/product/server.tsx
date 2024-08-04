// ini server side rendering
import ProductsView from "@/views/product/Main"
import { productType } from "@/entity/product.type";

const PapeProducts = (props: {products: productType[]}) => {
    const {products} = props
    return (
        <>
            <ProductsView products={products}/>
        </>
    )
}

export default PapeProducts;

// getServerSideProps fungsi nextjs untuk memanggil api dari server
export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/product') // ketika menggunaan getServerSideProps alamat url diisi dengan lengkap
    const response = await res.json()
    return {
        props: {
            products: response.data
        }
    }
}