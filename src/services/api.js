export async function getCategories() {
  try {
    const UrlCategories = 'https://api.mercadolibre.com/sites/MLB/categories';
    const response = await fetch(UrlCategories);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getProductsFromCategoryAndQuery(query, categoryId) {
  try {
    const UrlCategoryProd = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`; // fizemos uma alteração incluindo o segundo parametro
    const response = await fetch(UrlCategoryProd);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getProductsDetails(productId) {
  try {
    const UrlIdProd = `https://api.mercadolibre.com/items/${productId}`;
    const response = await fetch(UrlIdProd);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
