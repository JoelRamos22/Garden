//15.Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.



export async function getAllProductsByCode(code) {
    let res = await fetch(`http://172.16.101.146:5686/products?code=$code`);
    let data = await res.json();
    return data;
  }

//3.8 Devuelve un listado de los productos que nunca han aparecido en un pedido.

export const getProductsNeverOrdered = async() =>{
    let productsRes = await fetch(`http://172.16.101.146:5686/products`);
    let products = await productsRes.json();

    let ordersRes = await fetch(`http://172.16.101.146:5690/requests`);
    let orders = await ordersRes.json();

    let productsInOrders = new Set();
        orders.forEach(order => {
            if (order.products) {
                order.products.forEach(product => {
                    productsInOrders.add(product.code_product);
                });
            }
        });

    let productsNeverOrdered = products.filter(product => !productsInOrders.has(product.code_product));

    return productsNeverOrdered;
}

//3.9
export const getProductsNotOrdered = async() =>{
    let productsRes = await fetch(`http://172.16.101.146:5686/products`);
    let products = await productsRes.json();

    let ordersRes = await fetch(`http://172.16.101.146:5690/requests`);
    let orders = await ordersRes.json();

    let productsInOrders = new Set();
        orders.forEach(order => {
            if (order.products) {
                order.products.forEach(product => {
                    productsInOrders.add(product.code_product);
                });
            }
        });

        let productsNotOrdered = products.filter(product => !productsInOrders.has(product.code_product));

        let formattedProducts = productsNotOrdered.map(product => ({
            name: product.name,
            description: product.description,
            image: product.image
        }));

        return formattedProducts;
}