const toggleBtn = document.getElementById('toggle')
const container = document.querySelector('.container')
const select = document.querySelector('select')
const inputColor = document.getElementById('input')
const getColorBtn = document.getElementById('get-color')
const hexValues = document.querySelectorAll('.hex-value')
const footerText = document.querySelector('.attribution')
const mainColor = document.querySelectorAll('.main-color')
let colorData


toggleBtn.addEventListener('click', toggleDarkLight)
getColorBtn.addEventListener('click', getColorScheme)

function toggleDarkLight() {
  let element = document.body
  element.classList.toggle('light-mode')
  container.classList.toggle('container-dark')
  select.classList.toggle('select-dark')
  getColorBtn.classList.toggle('btn-dark')
  for (hex of hexValues) {
    hex.classList.toggle('hex-value-light')
  }
  footerText.classList.toggle('attribution-dark')
}

function getColorScheme() {
  const hexValue = inputColor.value.slice(1)
  const selectedValue = select.value

  fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${selectedValue}`)
    .then(res => res.json())
    .then(data => {
      colorData = data.colors
      updateColors()
    })
}

function updateColors() {
  for (color of colorData) {
    const index = colorData.indexOf(color)
    const hexVal = color.hex.value
    mainColor[index].style.backgroundColor = `${hexVal}`
    hexValues[index].textContent = `${hexVal}`
  }
}