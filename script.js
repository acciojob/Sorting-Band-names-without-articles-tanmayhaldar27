//your code here 
let bandNames = ['The Beatles', 'Nirvana', 'Led Zeppelin', 'The Rolling Stones', 'Pink Floyd'];

function sortBandNames(bandNames) {
  const articles = ['a', 'an', 'the'];

  const compareBandNames = (a, b) => {
    const nameA = a.toLowerCase().replace(/^(a|an|the)\s+/i, '');
    const nameB = b.toLowerCase().replace(/^(a|an|the)\s+/i, '');
    return nameA.localeCompare(nameB);
  };

  bandNames.sort(compareBandNames);

  const ulElement = document.getElementById('bands');
  ulElement.innerHTML = '';

  bandNames.forEach(name => {
    const liElement = document.createElement('li');
    liElement.textContent = name;
    ulElement.appendChild(liElement);
  });
}

sortBandNames(bandNames);


