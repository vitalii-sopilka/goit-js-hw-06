const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');

const imageEl = images
  .map(element => `<li> <img src=${element.url} alt=${element.alt} width = 240> </li>`)
  .join('');

galleryList.insertAdjacentHTML("beforeend", imageEl);
console.log(galleryList);

galleryList.style.display = "grid";
galleryList.style.gap = "40px";
galleryList.style.justifyContent = "center";
