import LoginView from "@/views/auth/login";
import { useRouter } from "next/router"
import Head from "next/head";

const LoginPage = () => {
    const router = useRouter();
    const handlerLogin = () => {
        router.push("/product");
    }
    return (
        <>
            <Head>
                <title>Login Page</title>
            </Head> 
            <LoginView handlerLogin={handlerLogin}/>
        </>
    )
}

export default LoginPage