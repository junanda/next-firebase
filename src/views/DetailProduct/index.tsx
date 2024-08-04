import { productType } from "@/entity/product.type";
import { Radio, RadioGroup } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
// import Image from "next/image";
import Link from "next/link"
import { useState } from "react";

const reviews = { href: '#', average: 4, totalCount: 117 }

const barang = {
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
      ],
      sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
      ],
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const DetailProductView = ({ product }: { product: productType }) => {
    const [selectedColor, setSelectedColor] = useState(barang.colors[0])
    const [selectedSize, setSelectedSize] = useState(barang.sizes[2])

    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol className="mx-auto flex items-center space-x-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8" role="list">
                        <li>
                            <div className="flex items-center">
                                <Link href="#" className="mr-2 text-sm font-medium text-gray-900">Product</Link>
                                <svg width={16} height={20} aria-hidden="true" className="h-5 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" /></svg>
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
                        {/* <Image className="h-full w-full object-cover object-center" src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." /> */}
                        <img className="h-full w-full object-cover object-center" src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img className="h-full w-full object-cover object-center" src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee." />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img className="h-full w-full object-cover object-center" src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="Model wearing plain gray basic tee" />
                        </div>
                    </div>
                    <div className="aspect-h-5 aspect-w-4 lg:asperct-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img className="h-full w-full object-cover object-center" src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee" />
                    </div>
                </div>

                {/* product info */}
                <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                    </div>
                    {/* options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
                        {/* reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon key={rating} aria-hidden="true" className={classNames(reviews.average > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0')} />
                                    ))}
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                <Link href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"> {reviews.totalCount} reviews</Link>
                            </div>
                        </div>
                        <form className="mt-10">
                        {/* colors */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Color</h3>
                            <fieldset className="mt-4" aria-label="Choose a color">
                                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center space-x-3">
                                    {barang.colors.map((color) => (
                                        <Radio key={color.name} value={color.name} className="text-base font-medium text-gray-900">{color.name}</Radio>
                                    ))}
                                </RadioGroup>
                            </fieldset>
                        </div>
                    </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DetailProductView;