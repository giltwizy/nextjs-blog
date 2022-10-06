import { useRouter } from 'next/router'

function ProductDetails(){
    const _route = useRouter()
    const productID =_route.query.productID
    return <h2>Details about the product</h2>
}

export default ProductDetails