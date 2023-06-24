//your code here
// Given array of band names
let bandNames = ['The Beatles', 'Nirvana', 'Led Zeppelin', 'The Rolling Stones', 'Pink Floyd'];

// Function to sort the band names in lexicographic order excluding articles
function sortBandNames(bandNames) {
  // Define articles to exclude from sorting
  const articles = ['a', 'an', 'the'];

  // Sorting function for band names
  const compareBandNames = (a, b) => {
    const nameA = a.toLowerCase().replace(/^(a|an|the)\s+/i, '');
    const nameB = b.toLowerCase().replace(/^(a|an|the)\s+/i, '');
    return nameA.localeCompare(nameB);
  };

  // Sort the band names in lexicographic order
  bandNames.sort(compareBandNames);

  // Get the ul element with id 'band'
  const ulElement = document.getElementById('band');

  // Clear the ul element
  ulElement.innerHTML = '';

  // Create and append li elements for each sorted band name
  bandNames.forEach(name => {
    const liElement = document.createElement('li');
    liElement.textContent = name;
    ulElement.appendChild(liElement);
  });
}

// Call the function to sort and display the band names
sortBandNames(bandNames);

