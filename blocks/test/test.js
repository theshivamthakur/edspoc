export default function decorate(block) {
  console.log('🧩 Decorating test block...', block);

  // AEM injects empty <div>s; we need to detect and fill them.
  const resource = block.getAttribute('data-aue-resource');
  const itemsContainer = block.querySelector('[data-aue-resource$="/items"]');

  // If we already have rendered content, skip.
  if (block.querySelector('.test-item')) return;

  // Try to find child placeholders
  const rows = [...block.querySelectorAll(':scope > div')];

  // Dummy fallback data (only used when AEM doesn’t inject text)
  const dummyData = [
    { title: 'Sample Title 1', description: 'Sample Description 1' },
    { title: 'Sample Title 2', description: 'Sample Description 2' },
    { title: 'Sample Title 3', description: 'Sample Description 3' },
  ];

  // Try to infer if AEM already provided content
  const dataFromDom = rows
    .map((row) => {
      const textEls = [...row.querySelectorAll('p,h1,h2,h3,h4,span,div')];
      const text = textEls.map((el) => el.textContent?.trim()).filter(Boolean);
      if (text.length >= 2) {
        return { title: text[0], description: text.slice(1).join(' ') };
      }
      return null;
    })
    .filter(Boolean);

  const finalData = dataFromDom.length ? dataFromDom : dummyData;

  console.log('📦 Rendering items:', finalData);

  // Clear placeholder DOM
  block.innerHTML = '';

  // Create clean container
  const wrapper = document.createElement('div');
  wrapper.className = 'test-wrapper';

  finalData.forEach(({ title, description }) => {
    const item = document.createElement('div');
    item.className = 'test-item';
    item.innerHTML = `
      <h3 class="test-title">${title}</h3>
      <p class="test-description">${description}</p>
    `;
    wrapper.appendChild(item);
  });

  block.appendChild(wrapper);
}
