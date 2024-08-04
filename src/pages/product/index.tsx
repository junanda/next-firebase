import ProductsView from "@/views/product/Main";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";

const ProductPage = () => {
    const [isLogin, setIsLogin] = useState(true)
    const { push } = useRouter()
    // const [products, setProducts] = useState([])

    useEffect(() => {
        if (!isLogin) {
            push('/auth/login')
        }
    }, [isLogin, push]);

    const { data, error, isLoading } = useSWR('/api/product', fetcher); // menggunakan fetcher swr untuk memanggil api - lazy loading

    // useEffect(() => {
    //     fetch('/api/product').then(res => res.json()).then(response => {
    //         setProducts(response.data)
    //     })
    // }, [setProducts]);

    return (
        <>
            <ProductsView products={isLoading ? [] : data.data}/>
        </>
    )
}

export default ProductPage