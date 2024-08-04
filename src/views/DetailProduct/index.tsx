import { productType } from "@/entity/product.type";
import Link from "next/link"



const DetailProductView = ({product}: {product: productType}) => {
    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol className="mx-auto flex items-center space-x-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8" role="list">
                        <li>
                            <div className="flex items-center">
                                <Link href="#" className="mr-2 text-sm font-medium text-gray-900">Product</Link>
                                <svg width={16} height={20} aria-hidden="true" className="h-5 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"/></svg>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <Link href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">{product.name}</Link>
                            </div>
                        </li>
                    </ol>
                </nav>
                {/* image galery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-4 aspect-w-3 w-full overflow-hidden hidden rounded-lg lg:block">
                        <img className="h-full w-full object-cover object-center" src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat."/>
                    </div>
                    <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                        <img className="h-full w-full object-cover object-center" src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee."/>
                    </div>
                    <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                        <img className="h-full w-full object-cover object-center" src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="Model wearing plain gray basic tee"/>
                    </div>
                    <div className="aspect-h-5 aspect-w-4 lg:asperct-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img className="h-full w-full"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProductView;