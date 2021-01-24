$(()=>    //basically yaha pe done function function jo page load hone ke bad hi chalega
{
let productList = $('#product-list')

fetchProducts(function (products)
{
    productList.empty()
    for (product of products)
    {
        productList.append(createProductCard(product))
    }
})

})