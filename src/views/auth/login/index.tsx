import Link from "next/link";
import React from "react";

interface LoginViewProps {
    handlerLogin: ()=>void
}

const LoginView = ({handlerLogin}: LoginViewProps) => {
    return (
        <div className="flex justify-center px-6 py-12 lg:px-8 flex-col flex-1 min-h-full">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="mt-10 h-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h1>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="post" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email addres</label>
                        <div className="mt-2">
                            <input type="email" id="email" name="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">password</label>
                            <div className="text-sm"><a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forget Password?</a></div>
                        </div>
                        <div className="mt-2">
                            <input type="password" id="password" name="password" required autoComplete="current-password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
            <button onClick={handlerLogin}>Login</button>
            <p className="mt-10 text-center text-sm text-gray-500">Belum punya Akun? Registrasi <Link href={"/auth/register"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">disini</Link></p>
        </div>
    )
}

export default LoginView;