const container = document.querySelector('.container');

const elements = [];

renderElements(12)

elements.forEach(async el => {
  try {
    await delay(5000)
    const img = document.createElement('img')
    img.setAttribute('src', "/logo.png")
    el.querySelector('.img').append(img);

    const text = el.querySelector('.text');
    text.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.';

    if (text.innerHTML) {
      text.classList.remove('skeleton');
    }

  } catch (error) {
    console.error(error)
  }
})

console.log(container);

function createEl(parent, tag, ...classArr) {
  let el = document.createElement(tag)

  classArr.forEach(cls => el.classList.add(cls))
  parent.append(el)
  return el;
}

function renderElements(n) {
  for (let i = 0; i < n; i++) {
    let element = createEl(container, 'div', 'element')
    createEl(element, 'div', 'img', 'skeleton')
    createEl(element, 'div', 'text', 'skeleton')
    container.append(element)
    elements.push(element)
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}