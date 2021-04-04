function fetchProducts (done)  //done is function inside a function
{
    $.get('/api/products',function (data)  //yaha se products.js pe gaya aur badle me data leke araha hai
    {
        done(data)   //this is a callback function here
    })
}
function addProduct (name,manuf,price,done)
{
$.post('/api/products',{
    name : name,
    manufacturer : manuf,
    price : price
},function (data)
{
done(data)
})
}

function createProductCard (product)  //product is object here
{
  return $(` <div class="col-4 bg-dark text-white card p-4 hov" style="margin-top:40px;margin-left:110px;
  margin-bottom:40px;
  box-shadow:grey 8px 8px 8px;">
  <h2 class="product-name"><i class='far fa-star' style='font-size:36px'></i> ${product.name}</h2>
  <div class="product-manufacturer"> ${product.manufacturer}</div>
  <div class="row">
  <div class="col m-3 p-3">
     <b><i class='fas fa-rupee-sign' style='font-size:36px'></i>${product.price}</b>
  </div>
  <button class="col btn btn-primary m-3 p-2">BUY</button>
</div>
</div>`)
}