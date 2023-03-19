function create(words) {
   const contentElement = document.getElementById('content');

   const showName = function(e) {
      e.currentTarget.querySelector('p').style.display = 'block';
   }

   words.forEach(w => {
      const divElement = document.createElement('div');
      const pElement = document.createElement('p');
      pElement.textContent = w;
      pElement.style.display = 'none';
      divElement.addEventListener('click', showName);
      divElement.appendChild(pElement);
      contentElement.appendChild(divElement);
   })
}