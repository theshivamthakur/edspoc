export default function decorate(block) {
  // Get data attributes from AEM DOM if needed (for now, static fallback)
  const titleText = block.querySelector('[data-field="testtitle"]')?.textContent || 'Sample Title';
  const descText = block.querySelector('[data-field="description"]')?.textContent || 'Sample Description';

  // Clear existing content
  block.innerHTML = '';

  // Create wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'test-block';

  // Title
  const title = document.createElement('h2');
  title.className = 'test-title';
  title.textContent = titleText;

  // Description
  const desc = document.createElement('p');
  desc.className = 'test-description';
  desc.textContent = descText;

  // Append elements
  wrapper.appendChild(title);
  wrapper.appendChild(desc);
  block.appendChild(wrapper);
}
