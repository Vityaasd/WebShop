import './style.css'
// Interfész a termékek reprezentálására
interface Product {
    name: string;
    stock: number;
  }
  
  // A kosár kezelése
  class ShoppingCart {
    private cart: Map<string, number> = new Map();
  
    addProduct(productName: string, quantity: number) {
      if (this.cart.has(productName)) {
        const currentQuantity = this.cart.get(productName)!;
        this.cart.set(productName, currentQuantity + quantity);
      } else {
        this.cart.set(productName, quantity);
      }
      this.renderCart();
    }
  
    removeProduct(productName: string) {
      this.cart.delete(productName);
      this.renderCart();
    }
  
    renderCart() {
      console.log("Kosár tartalma:");
      this.cart.forEach((quantity, productName) => {
        console.log(`${productName}: ${quantity}`);
      });
    }
  }
  
  // Kosár példányosítása
  const cart = new ShoppingCart();
  
  // Események kezelése
  document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");
  
    products.forEach((productElement) => {
      const nameElement = productElement.querySelector<HTMLDivElement>(".col-md-3");
      const stockElement = productElement.querySelector<HTMLDivElement>(".col-md-3 + .col-md-3");
      const inputElement = productElement.querySelector<HTMLInputElement>("input");
      const addButton = productElement.querySelector<HTMLButtonElement>(".btn-primary");
      const removeButton = productElement.querySelector<HTMLButtonElement>(".btn-danger");
  
      if (nameElement && stockElement && inputElement && addButton && removeButton) {
        const productName = nameElement.textContent!.trim();
        const stock = parseInt(stockElement.textContent!.replace("Raktáron:", "").trim(), 10);
  
        // "Kosárba" gomb esemény
        addButton.addEventListener("click", () => {
          const quantity = parseInt(inputElement.value, 10);
          if (quantity > 0 && quantity <= stock) {
            cart.addProduct(productName, quantity);
          } else {
            alert("Helytelen mennyiség!");
          }
        });
  
        // "Törlés" gomb esemény
        removeButton.addEventListener("click", () => {
          cart.removeProduct(productName);
        });
      }
    });
  });  