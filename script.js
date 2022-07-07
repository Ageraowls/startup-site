const cards = document.querySelectorAll('.plan-card');
const opacityCard = document.querySelector('.opacity');

const getOpacity = () => {
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      if (card.classList.contains('opacity')) {
        card.classList.remove('opacity');
        opacityCard.classList.add('opacity');
      } else {
        opacityCard.classList.remove('opacity');
        card.classList.add('opacity');
      }
    });
  });
};

const closeOpacity = () => {
  cards.forEach((card) => {
    card.addEventListener('mouseleave', () => {
      if (card.classList.contains('opacity')) {
        card.classList.remove('opacity');
      }
    });
  });
};

getOpacity();
closeOpacity();
