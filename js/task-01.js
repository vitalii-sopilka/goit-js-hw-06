const categoryItems = document.querySelectorAll('.item');
console.log('Number of categories:',categoryItems.length);

categoryItems.forEach(element => {
  console.log('Category:', element.querySelector('h2').textContent);
  console.log('Elements:', element.querySelectorAll('li').length);
});
