export default function decorate(block) {
  // Always check what's already inside
  console.log('Rendered block DOM:', block.innerHTML);

  // If AEM already rendered DOM with items, just enhance or style it
  const items = block.querySelectorAll('.items .item');

  if (items.length > 0) {
    // Franklin editor already gave us the structure; we can just log or decorate it
    items.forEach((item, index) => {
      const title = item.querySelector('.title')?.textContent?.trim();
      const desc = item.querySelector('.description')?.textContent?.trim();
      console.log(`Item ${index + 1}:`, { title, desc });
    });
    return; // don’t overwrite DOM
  }

  // If DOM is empty (e.g., static rendering or local testing), fallback to mock data
  console.warn('No AEM-authored DOM found; using fallback content.');

  const mockItems = [
    { title: 'First Item Title', description: 'This is the description for the first item.' },
    { title: 'Second Item Title', description: 'This is the description for the second item.' },
  ];

  const container = document.createElement('div');
  container.classList.add('items');

  mockItems.forEach(({ title, description }) => {
    const item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `
      <div class="title">${title}</div>
      <div class="description">${description}</div>
    `;
    container.appendChild(item);
  });

  block.innerHTML = '';
  block.appendChild(container);
}
