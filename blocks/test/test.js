export default async function decorate(block) {
  console.log('Decorating test block', block);

  const resource = block.dataset.aueResource;
  if (!resource) return;

  // Franklin universal editor expects full urn scheme
  const modelUrl = `${resource}.model.json`;
  console.log('Fetching model via bridge:', modelUrl);

  try {
    const response = await fetch(modelUrl, {
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) throw new Error(`Failed to load: ${response.status}`);
    const data = await response.json();
    console.log('Model data:', data);

    const items = data?.items || [];
    if (!items.length) {
      block.innerHTML = '<p>No items found</p>';
      return;
    }

    block.innerHTML = items
      .map(
        (item) => `
        <div class="item">
          <h3>${item.title || 'Untitled'}</h3>
          <p>${item.description || ''}</p>
        </div>`
      )
      .join('');
  } catch (e) {
    console.error('Error fetching model:', e);
  }
}
