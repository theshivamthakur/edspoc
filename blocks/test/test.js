export default function decorate(block) {
  console.group('🧩 Test Block Debug');
  console.log('Block Element:', block);

  const resource = block.getAttribute('data-aue-resource');
  console.log('data-aue-resource:', resource);

  const childResources = [...block.querySelectorAll('[data-aue-resource]')];
  console.log('Child data-aue-resource:', childResources.map(el => el.getAttribute('data-aue-resource')));

  // Check for the items container (container field)
  const itemsContainer = block.querySelector('[data-aue-resource$="/items"]');
  console.log('Items container found:', itemsContainer);

  // Try to extract data from items container
  if (itemsContainer) {
    const possibleItems = [...itemsContainer.querySelectorAll(':scope > div, :scope > *')];
    console.log('Inner content of itemsContainer:', possibleItems);

    const parsedItems = possibleItems.map((el) => {
      const titleEl = el.querySelector('[data-aue-prop="title"], h3, p, div');
      const descEl = el.querySelector('[data-aue-prop="description"], p, div:not(:first-child)');
      const title = titleEl?.textContent?.trim();
      const description = descEl?.textContent?.trim();
      return { title, description };
    }).filter(item => item.title || item.description);

    if (parsedItems.length) {
      console.log('✅ Parsed Items from DOM:', parsedItems);

      const wrapper = document.createElement('div');
      wrapper.className = 'test-wrapper';
      parsedItems.forEach(({ title, description }) => {
        const item = document.createElement('div');
        item.className = 'test-item';
        item.innerHTML = `
          <h3 class="test-title">${title || ''}</h3>
          <p class="test-description">${description || ''}</p>
        `;
        wrapper.appendChild(item);
      });

      block.innerHTML = '';
      block.appendChild(wrapper);
      console.groupEnd();
      return;
    }
  }

  // Nothing parsed — diagnostic message
  console.warn('⚠️ No renderable items found in AEM DOM for this block.');
  const msg = document.createElement('div');
  msg.style.color = 'red';
  msg.style.fontSize = '14px';
  msg.textContent = '⚠️ No AEM model data found in rendered DOM.';
  block.appendChild(msg);
  console.groupEnd();
}
