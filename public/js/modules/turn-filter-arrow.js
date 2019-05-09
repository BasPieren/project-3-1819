function turnFilterArrow() {
  const filter = document.querySelector('#p3-filter-runs'),
        filterArrowDown = document.querySelector('#p3-filter-runs div:first-of-type i:last-of-type')

  filterArrowDown.addEventListener('click', () => {
    filter.classList.toggle('p3-filter-runs-expanded')
    filterArrowDown.classList.toggle('p3-filter-arrow-turn')
  })
}

export { turnFilterArrow }
