var imageDir = "assets/";
var images = [
  ['treason 1.jpg', 'treason 2.jpg', 'treason 3.jpg', 'treason 4.jpg', 'treason 5.jpg'],

  ['mice 1.png', 'mice 2.jpg', 'mice 3.jpg', 'wall mounted radiator 1.jpg'],

  ['interface 1 site.jpg', 'interface 2 site.jpg', 'interface 3 site.jpg'],

  ['postcat 1.jpg', 'postcat 2.jpg', 'postcat 3.jpg', 'postcat 4.jpg'],

  ['clear signs/clear signs 1.jpg', 'clear signs/clear signs 2.jpg', 'clear signs/clear signs 3.jpg',
  'clear signs/clear signs 4.jpg', 'clear signs/clear signs oj.jpg',
  'clear signs/clear signs speakers.jpg'],

  ['reform club 1/reform club v1 1.jpg', 'reform club 1/reform club v1 2.jpg'],

  ['reform Club 2/reform club 2 1.jpg', 'reform Club 2/reform club 2 2.jpg', 'reform Club 2/reform club 2 3.jpg',
  'reform Club 2/reform club 2 4.jpg', 'reform Club 2/reform club 2 5.jpg', 'reform Club 2/reform club 2 6.jpg',
  'reform Club 2/reform club 2 7.jpg', 'reform Club 2/reform club 2 8.jpg', 'reform Club 2/reform club 2 9.jpg']
]

var descriptions = [
  ['Treason 1<br>- Digital Image<br>- A4 Document<br>- 2019',
  'Treason 2<br>- Digital Image<br>- A4 Document<br>- 2019',
  'Treason 3<br>- Digital Image<br>- A4 Document<br>- 2019',
  'Treason 4<br>- Digital Image<br>- A4 Document<br>- 2019',
  'Treason 5<br>- Digital Image<br>- A4 Document<br>- 2019'],

  ['Litter<br>- GAN generated images<br>- 64 x 64px<br>- 2019',
  'Untitled<br>- Oil and Gloss on Canvas<br>- 70 x 90cm<br>- 2019',
  'Untitled- Oil on paper<br>- 46 x 46cm<br>- 2019',
  'Wall Mounted Radiator (For Olly)<br>- 70 x 50cm<br>- 2020'],

  ['How are Pfizer\'s stocks performing?<br>- Digital Image<br>- 2021',
  'When is the next train to London Bridge?<br>- Digital Image<br>- 2021',
  'What\'s the temperature like outside?<br>- Digital Image<br>- 2021'],

  ['Cat 1<br>-Found Digital Image (edited)<br>-2021',
  'Cat 2<br>-Found Digital Image (edited)<br>-2021',
  'Cat 3<br>-Found Digital Image (edited)<br>-2021',
  'Cat 4<br>-Found Digital Image (edited)<br>-2021'],

  ['Clear Signs installation shot<br>- Acrylic, aluminium, vinyl, orange juice, sound<br>- 2021',
  'Clear Signs detail<br>- Acrylic, aluminium, vinyl, orange juice, sound<br>- 2021',
  'Clear Signs detail<br>- Acrylic, aluminium, vinyl, orange juice, sound<br>- 2021',
  'Clear Signs detail<br>- Acrylic, aluminium, vinyl, orange juice, sound<br>- 2021',
  'Clear Signs detail spiked juice<br>- orange juice, glitter <br>- 2021',
  'Clear Signs detail The sounds of flying cars<br>- Sound piece recorded on tape player<br>- 2021'],

  ['Reform Club installation 1<br>Collaboration with Evie Savini<br>- PVC pipe, mesh screen, audio reactive projection<br>- 2022',
  'Reform Club installation 1 detail<br>Collaboration with Evie Savini<br>- PVC pipe, mesh screen, audio reactive projection<br>- 2022'],

  ['Reform Club 2 installation shot<br>Audio reactive suspended projection platform<br>Maypole<br>Remix Flyers<br>Sign for a party<br>Sound loop<br>- 2022',
  'Reform Club 2 installation shot<br>Sign for a party, Remix Flyers<br>- Arcylic, aluminium, vinyl, graphite on tracing paper<br>- 2022',
  'Reform Club 2 installation shot<br>Remix Flyers<br>- Graphite on tracing paper<br>- 2022',
  'Reform Club 2 installation shot<br>Suspension platform<br>- Arcylic, fabric, hanging wire, beer crate<br>- 2022',
  'Reform Club 2 detail<br>Sign for a party<br>- Arcylic, aluminium, vinyl<br>- 2022',
  'Reform Club 2 detail<br>Remix Flyer<br>- Graphite on tracing paper<br>- 2022',
  'Reform Club 2 installation shot<br>Maypole<br>- Translucent ribbon, PVC pipe, Hex nuts<br>- 2022',
  'Reform Club 2 detail<br>Maypole<br>- Translucent ribbon, PVC pipe, Hex nuts<br>- 2022',
  'Reform Club 2 detail<br>- Beer<br>- 2022']
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

