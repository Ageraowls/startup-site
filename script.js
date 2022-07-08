document.addEventListener('DOMContentLoaded', () => {
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
});

/* click 1 */

/* let activeCard = cards[0];
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      activeCard.classList.remove('opacity');
      activeCard = card;
      activeCard.classList.add('opacity');
    });
  }); */

/* click 2 */

/* cards.forEach((card) => {
  card.addEventListener('click', function () {
    cards.forEach((item) => item.classList.remove('opacity'));
    this.classList.add('opacity');
  });
});
 */
