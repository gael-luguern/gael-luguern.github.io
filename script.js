/* SLIDER JS */
    let index = 0;
    const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;


    /* MENU JS */
    const data = [
      {
        title: 'Présentation',
        text: 'SAKOCHE est une marque moderne mettant en avant un design épuré et une identité forte.',
        img: 'https://picsum.photos/500/350?4'
      },
      {
        title: 'Produits',
        text: 'Nos produits sont conçus avec soin pour allier style, qualité et durabilité.',
        img: 'https://picsum.photos/500/350?5'
      },
      {
        title: 'Valeurs',
        text: 'Créativité, authenticité et exigence sont au cœur de l’univers SAKOCHE.',
        img: 'https://picsum.photos/500/350?6'
      }
    ];

    function changeMenu(i) {
      document.getElementById('menuTitle').textContent = data[i].title;
      document.getElementById('menuDescription').textContent = data[i].text;
      document.getElementById('menuImage').src = data[i].img;

      document.querySelectorAll('.menu-buttons button').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.menu-buttons button')[i].classList.add('active');
    }