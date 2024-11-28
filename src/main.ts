import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', (event) => {
      const product = (event.target as HTMLElement).closest('.product');
      if (product) {
        const quantityInput = product.querySelector('input') as HTMLInputElement;
        const quantity = parseInt(quantityInput.value);
        const stockElement = product.querySelector('div:nth-child(2)') as HTMLElement;
        const stock = parseInt(stockElement.innerText.split(': ')[1]);

        if ((event.target as HTMLButtonElement).innerText === 'Kosárba') {
          if (quantity > stock) {
            alert('Nincs elég raktáron');
          } else {
            alert(`Hozzáadva a kosárhoz: ${quantity} db`);
            stockElement.innerText = `Raktáron: ${stock - quantity}`;
          }
        } else {
          alert('Termék törölve');
          quantityInput.value = '1';
        }
      }
    });
  });

  const storageButton = document.getElementById('storage-button');
  if (storageButton) {
    storageButton.addEventListener('click', () => {
      window.location.href = 'storage.html';
    });
  }
});