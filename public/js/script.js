'use strict';

(function() {

  const filter = document.querySelector('#p3-filter'),
        filterArrowDown = document.querySelector('#p3-filter i:last-of-type')

  filterArrowDown.addEventListener('click', () => {
    filter.classList.toggle('p3-filter-expanded')
    filterArrowDown.classList.toggle('p3-arrow-turn')
  })

}())
