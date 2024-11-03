function Chooselanguage (language){
    const choose = {
        TH : {
            products : 'สินค้า',
        },
        EN : {
            products : 'Products',
        }
    };
    document.getElementById('products').innerText = choose[language].products;
}