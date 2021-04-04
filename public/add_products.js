$(()=>
{
    let productName = $('#productName')
    let productManufacturer = $('#productManufacturer')
    let productPrice = $('#productPrice')

    $('#btnProductAdd').click(function ()
    {
        addProduct(    ///ye wala fun() shop.js me hai ! to humne iss fun() me parameters me bhejdiye hai
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            function (addedProduct)   //this is a callback() tabhi chalega jb prodcuts add hojaynge
            {
                window.alert("added" + addedProduct.name + " to database")
            }
        )
    })
})