const toggle = document.getElementById('toggle')

const container = document.querySelector('.container')

const select = document.querySelector('select')

const getBtn = document.getElementById('get-color')

const hexValues = document.querySelectorAll('.hex-value')

const footerText = document.querySelector('.attribution')


toggle.addEventListener('click', toggleDarkLight)


function toggleDarkLight() {
  let element = document.body
  element.classList.toggle('light-mode')

  container.classList.toggle('container-dark')

  select.classList.toggle('select-dark')

  getBtn.classList.toggle('btn-dark')

  for (hex of hexValues) {
    hex.classList.toggle('hex-value-light')
  }

  footerText.classList.toggle('attribution-dark')
}