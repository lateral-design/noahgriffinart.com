var imageDir = "assets/";
var images = [
  ['treason 1.jpg', 'treason 2.jpg', 'treason 3.jpg', 'treason 4.jpg', 'treason 5.jpg'],
  ['de facto space cover.jpg', 'de facto space text.jpg', 'long straight.jpg'],
  ['mice 1.png', 'mice 2.jpg', 'mice 3.jpg', 'wall mounted radiator 1.jpg'],
  ['interface 1 site.jpg', 'interface 2 site.jpg', 'interface 3 site.jpg']
]

var descriptions = [

  ['Treason 1<br>- Digital Image<br>- A4 Document<br>- 2019',
  'Treason 2<br>- Digital Image<br>- A4 Document<br>- 2019',
  'Treason 3<br>- Digital Image<br>- A4 Document<br>- 2019',
  'Treason 4<br>- Digital Image<br>- A4 Document<br>- 2019',
  'Treason 5<br>- Digital Image<br>- A4 Document<br>- 2019'],

  ['De Facto Space<br>- 2020',
  'De Facto Space<br>- 2020',
  'Long Straight<br>- 2020'],

  ['Litter<br>- GAN generated images<br>- 64 x 64px<br>- 2019',
  'Untitled<br>- Oil and Gloss on Canvas<br>- 70 x 90cm<br>- 2019',
  'Untitled- Oil on paper<br>- 46 x 46cm<br>- 2019',
  'Wall Mounted Radiator (For Olly)<br>- 70 x 50cm<br>- 2020'],

  ['How are Pfizer\'s stocks performing?<br>- Digital Image<br>- 2021',
  'When is the next train to London Bridge?<br>- Digital Image<br>- 2021',
  'What\'s the temperature like outside?<br>- Digital Image<br>- 2021']
]

var project;
var slide;

function projectSelect(x) {
  slide = 0;
  project = x;

  document.getElementById("currentImage").src = (imageDir.concat(images[project][slide]));
  document.getElementById("desc").innerHTML = (descriptions[project][slide]);

  document.querySelector('.right').addEventListener('click', () => {
    if (slide + 1 < (images[project]).length){
      slide++;
    }

    else if ((slide + 1 >= images[project].length) && (images[project].length > 1)){
      slide = 0;
    }

    document.getElementById("currentImage").src = (imageDir.concat(images[project][slide]));
    document.getElementById("desc").innerHTML = (descriptions[project][slide]);
  });

  document.querySelector('.left').addEventListener('click', () => {

    if (slide <= 0){
      slide = (images[project].length - 1);
    }

    else if ((slide  >= 1)){
      slide--;
    }

    document.getElementById("currentImage").src = (imageDir.concat(images[project][slide]));
    document.getElementById("desc").innerHTML = (descriptions[project][slide]);
  });
}

