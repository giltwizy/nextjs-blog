import { useRouter } from 'next/router'

function ProductDetails(){
    const _route = useRouter()
    const produc =_route.query.productIDY
    return <h2>Details about the product {produc}</h2>
}

export default ProductDetails