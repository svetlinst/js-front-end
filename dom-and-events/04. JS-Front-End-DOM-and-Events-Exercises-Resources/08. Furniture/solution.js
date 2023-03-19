function solve() {
  const generateButton = document.querySelector('#exercise button');
  const tbodyElement = document.querySelector('tbody');
  const basketElement = document.querySelector('body div div textarea:nth-of-type(2)');

  generateButton.addEventListener('click', (e) => {
    const items = JSON.parse(document.querySelector('#exercise textarea').value);
    items.forEach(x => {
      const newRow = document.createElement('tr');
      const img = document.createElement('img');
      const name = document.createElement('p');
      const price = document.createElement('p');
      const dec = document.createElement('p');
      const check = document.createElement('input');
      check.type = 'checkbox';

      img.src = x.img;
      name.textContent = x.name;
      price.textContent = x.price;
      dec.textContent = x.decFactor;

      const tdImg = document.createElement('td');
      const tdName = document.createElement('td');
      const tdPrice = document.createElement('td');
      const tdDec = document.createElement('td');
      const tdCheck = document.createElement('td');

      tdImg.appendChild(img);
      tdName.appendChild(name);
      tdPrice.appendChild(price);
      tdDec.appendChild(dec);
      tdCheck.appendChild(check);

      newRow.appendChild(tdImg);
      newRow.appendChild(tdName);
      newRow.appendChild(tdPrice);
      newRow.appendChild(tdDec);
      newRow.appendChild(tdCheck);

      tbodyElement.appendChild(newRow); 
    })
  })

  let checkboxElements = document.querySelectorAll('input[type=checkbox]');
  for (let el of checkboxElements) {
    el.disabled = false;
  }

  const buyButton = document.querySelector('button:nth-last-of-type(1)');

  buyButton.addEventListener('click', (e)=>{
    const allCheckboxes = tbodyElement.querySelectorAll('input[type=checkbox]');

    let itemsBought = [];
    let totalPrice = 0;
    let totalDecoration = 0;
    let itemsCount = 0;
  
    for (const el of allCheckboxes) {
      if (el.checked == true) {
        itemsBought.push(el.parentElement.parentElement.querySelector('td:nth-of-type(2) p').textContent);
        totalPrice+= Number(el.parentElement.parentElement.querySelector('td:nth-of-type(3) p').textContent);
        totalDecoration+= Number(el.parentElement.parentElement.querySelector('td:nth-of-type(4) p').textContent);
        itemsCount++;
      }
    }
  
    basketElement.textContent += `Bought furniture: ${itemsBought.join(', ')}\n`;
    basketElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    basketElement.textContent += `Average decoration factor: ${(totalDecoration / itemsCount)}`;
  })


}