interface Product {
    category: string;
    name: string;
    stock: number;
  }
  
  const products: Product[] = [
    { category: 'Almatermésű', name: 'Alma', stock: 50 },
    { category: 'Bogyós', name: 'Eper', stock: 30 },
    { category: 'Csonthéjas', name: 'Cseresznye', stock: 20 },
    { category: 'Déligyümölcsök', name: 'Narancs', stock: 40 },
    { category: 'Héjas', name: 'Dió', stock: 15 },
    // További termékek
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const storageContainer = document.getElementById('storage-container');
  
    if (storageContainer) {
      const categories = Array.from(new Set(products.map(product => product.category)));
  
      categories.forEach(category => {
        const shelfDiv = document.createElement('div');
        shelfDiv.classList.add('shelf');
  
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        shelfDiv.appendChild(categoryTitle);
  
        products
          .filter(product => product.category === category)
          .forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product', 'row', 'align-items-center', 'mb-2');
  
            const productName = document.createElement('div');
            productName.classList.add('col-md-6');
            productName.textContent = product.name;
            productDiv.appendChild(productName);
  
            const productStock = document.createElement('div');
            productStock.classList.add('col-md-6');
            productStock.textContent = `Raktáron: ${product.stock}`;
            productDiv.appendChild(productStock);
  
            shelfDiv.appendChild(productDiv);
          });
  
        storageContainer.appendChild(shelfDiv);
      });
    }
  });