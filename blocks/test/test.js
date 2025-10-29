export default function decorate(block) {
  const title = block.querySelector('[data-field="testtitle"]');
  const description = block.querySelector('[data-field="description"]');

  const wrapper = document.createElement('div');
  wrapper.classList.add('test-block');

  const titleEl = document.createElement('h2');
  titleEl.classList.add('test-title');
  titleEl.textContent = title?.textContent;

  const descEl = document.createElement('p');
  descEl.classList.add('test-description');
  descEl.textContent = description?.textContent;

  wrapper.appendChild(titleEl);
  wrapper.appendChild(descEl);
  block.innerHTML = '';
  block.appendChild(wrapper);
}
