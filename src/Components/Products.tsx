export default function Product()
{
    let products=["Iphone","Tablets","Smartphones","Speakers","Laptops"];
    let ProductList=products.map(product=><li>{product}</li>);
    return(
    <div className="products">
    <h2>This is our products in IntoreShop</h2>
    <h2>{ProductList}</h2>
    </div>
    )
}