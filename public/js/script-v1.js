'use strict';

(function() {

  const filter = document.querySelector('#p3-filter'),
        filterArrowDown = document.querySelector('#p3-filter i:last-of-type'),
        filterForm = document.querySelector('#p3-filter div:last-of-type'),
        articleArrowDown = document.querySelector('main article:first-of-type div:last-of-type i')

  filterArrowDown.addEventListener('click', () => {
    filter.classList.toggle('p3-filter-expanded')
    filterArrowDown.classList.toggle('p3-arrow-turn')
    filterForm.classList.toggle('p3-filter-form-expanded')
  })

  articleArrowDown.addEventListener('click', () => {
    console.log(articleArrowDown)
  })
}())
