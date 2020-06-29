const getPrice = (price: number | undefined) => `$${price ? price / 100 : price}`;

export { getPrice };
