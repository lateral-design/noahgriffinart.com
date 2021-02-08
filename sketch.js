var imageDir = "assets/";
var images = [
  ['interface 1 site.jpg', 'interface 2 site.jpg', 'interface 3 site.jpg'],
  ['mice 1.png', 'mice 2.jpg', 'mice 3.jpg', 'wall mounted radiator 1.jpg'],
  ['de facto space cover.jpg', 'de facto space text.jpg', 'long straight.jpg'],
  ['treason 1.jpg', 'treason 2.jpg', 'treason 3.jpg', 'treason 4.jpg', 'treason 5.jpg'],
  ['feet 1.jpg', 'feet 2.jpg', 'feet 3.jpg', 'feet 4.jpg'],
  ['portrait 1.jpg', 'duals 1.jpg', 'UNTITLED.jpg', 'portrait 2.jpg', 'portrait 3.jpg'],
  ['enfen crosses.jpg', 'poster 1.jpg', 'poster 2.jpg', 'poster 3.jpg', 'distortions 1.jpg',
  'distortions 2.jpg', 'distortions 3.jpg']
]

var descriptions = [
  ['How are Pfizer\'s stocks performing?<br>- Digital Image<br>- 2021',
  'When is the next train to London Bridge?<br>- Digital Image<br>- 2021',
  'What\'s the temperature like outside?<br>- Digital Image<br>- 2021'],

  ['Litter<br>- GAN generated images<br>- 64 x 64px<br>- 2019',
  'Untitled<br>- Oil and Gloss on Canvas<br>- 70 x 90cm<br>- 2019',
  'Untitled- Oil on paper<br>- 46 x 46cm<br>- 2019',
  'Wall Mounted Radiator (For Olly)<br>- 70 x 50cm<br>- 2020'],

  ['De Facto Space<br>- 2020',
  'De Facto Space<br>- 2020',
  'Long Straight<br>- 2020'],

  ['Treason 1<br>- Digital Image<br>- A4 Document<br>- 2019',
  'Treason 2<br>- Digital Image<br>- A4 Document<br>- 2019',
  'Treason 3<br>- Digital Image<br>- A4 Document<br>- 2019',
  'Treason 4<br>- Digital Image<br>- A4 Document<br>- 2019',
  'Treason 5<br>- Digital Image<br>- A4 Document<br>- 2019'],

  ['Feet 1<br>- Film Photograph<br>- 2019',
  'Feet 2<br>- Film Photograph<br>- 2019',
  'Feet 3<br>- Film Photograph<br>- 2019',
  'Feet 4<br>- Film Photograph<br>- 2019'],

  ['Kamran<br>- Oil on Canvas<br>-40 x 70cm<br>- 2019',
  'Untitled<br>- Oil on Paper<br>- 70 x 50cm<br>- 2020',
  'Release<br>- Oil on Canvas<br>- 30 x 40cm<br>- 2019',
  'Anxious Self Portrait<br>- Oil and Graphite on paper<br>- 20 x 25cm<br>-2019',
  'Billy<br>- Oil and Graphite on Mountboard<br>- 20 x 16cm<br>- 2018'],

  ['Enfen Crosses<br>- Cover Artwork<br>- 2020',
  'Gluem at The Brunswick Poster<br>- Poster Design<br>- 2018',
  'Nest Disjointed Exhibition by Kamran Amin<br>- Poster Design<br> -2020',
  'Toys at The Hope and Ruin<br>- Poster Design<br>- 2019',
  'Distortion 1<br>- 2018',
  'Distortion 2<br>- 2018',
  'Distortion 3<br>- 2019']
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
