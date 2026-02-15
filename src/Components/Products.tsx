export default function Product()
{
    let products=["Iphone","Tablets","Smartphones","Speakers","Laptops"];
    let ProductList=products.map(product=><li>{product}</li>);
    return(
        <div>
    <h1>This is our products in IntoreShop</h1>
    <h2>{ProductList}</h2>
    </div>
    )
}