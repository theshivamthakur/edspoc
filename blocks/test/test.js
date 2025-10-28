export default function decorate(block) {
  const resource = block.getAttribute('data-aue-resource');
  const model = window.__aemModels?.[resource];

  console.log('🔍 Rendering block', resource, model);

  // ✅ Clear the block first
  block.innerHTML = '';

  const items = model?.items || [
    { title: 'Fallback Title 1', description: 'Fallback Description 1' },
    { title: 'Fallback Title 2', description: 'Fallback Description 2' },
  ];

  const container = document.createElement('div');
  container.className = 'test-items';

  items.forEach(({ title, description }) => {
    const item = document.createElement('div');
    item.className = 'test-item';
    item.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
    `;
    container.appendChild(item);
  });

  block.appendChild(container);
}
