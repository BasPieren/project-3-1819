function turnFilterArrow() {
  const filter = document.getElementById('p3-filter-runs'),
        filterArrowDown = document.querySelector('#p3-filter-runs div:first-of-type i:last-of-type'),
        filterForm = document.querySelector('#p3-filter-runs .p3-filter-runs-form')

  filterArrowDown.addEventListener('click', () => {
    filter.classList.toggle('p3-filter-runs-expanded')
    filterArrowDown.classList.toggle('p3-filter-arrow-turn')
    filterForm.classList.toggle('p3-filter-runs-form-expanded')
  })
}

function turnTableArrow() {
  const articleArrowDown = document.querySelector('#p3-runs-table article:first-of-type div:last-of-type i'),
        articleInfo = document.querySelector('.p3-run-information')

  articleArrowDown.addEventListener('click', () => {
    articleArrowDown.classList.toggle('p3-filter-arrow-turn')
    articleInfo.classList.toggle('p3-filter-runs-form-expanded')
  })
}

export { turnFilterArrow, turnTableArrow }
