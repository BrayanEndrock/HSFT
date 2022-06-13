//document.addEventListener('load', function () {
const addToCart = (id) => {
    let data_product = {
        "id": id,
        "quantity": 1
    }
    fetch('/cart/add.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'dataType': 'json'
        },
        body: JSON.stringify(data_product),
    })
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {                
            goCart.fetchAndOpenCart();
        }, 150);
        //window.location = '/cart'
        return data;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
const quickAtcButton = document.querySelectorAll('.quick-atc__trigger.atc');
const quickAtcVariants = document.querySelectorAll('.quick-atc__variants');
quickAtcButton.forEach(element => {
    element.addEventListener('click', function (e) {
        quickAtcButton.forEach(element => {
            element.classList.remove('hide')
        })
        quickAtcVariants.forEach(element => {
            element.classList.add('hidden-atc')
        })
        e.target.classList.add('hide');
        e.currentTarget.closest('.quick-atc').querySelector('.quick-atc__variants').classList.remove('hidden-atc');
    });
})

const quickAtc = document.querySelectorAll('.quick-atc__variant');
quickAtc.forEach(element => {
    element.addEventListener('click', function (e) {
        console.log(e);
        addToCart(e.target.getAttribute('data-variant-id'));
    })
});
//});