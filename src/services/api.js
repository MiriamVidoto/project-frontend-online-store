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

// oi

export async function getProductsFromCategoryAndQuery(categoryId) {
  try {
    const UrlCategoryProd = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    const response = await fetch(UrlCategoryProd);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
