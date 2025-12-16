export function formatPrice(price:number) {
    const priceFormated = new Intl.NumberFormat('ec-EC', {
        style: "currency",
        currency: "USD",
    })

    const finalPrice = priceFormated.format(price);

    return finalPrice;
}