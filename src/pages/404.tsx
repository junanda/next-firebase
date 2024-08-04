// import Head from "next/head";

const Custom404 = () => {
    return (
        <>
        <div>
            <div className="h-screen w-screen bg-gray-50 flex items-center">
                <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                    <div className="w-full lg:w-1/2 mx-8">
                        <div className="text-7xl text-green-500 font-dark font-extrabold mb-8">404</div>
                        <p className="text-2xl md:text-3xl font-light leading-normal">Sorry we couldn't find the page you're looking for.</p>
                        <p className="mb-8">But dont worry, you cant find plenty of other things  on our homepage.</p>

                        <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border rounded-lg focus:outline-none bg-indigo-600 active:bg-indigo-700 hover:bg-indigo-700">back to homepage</button>
                    </div>

                    <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                        <img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" className="" alt="Page not found" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Custom404;