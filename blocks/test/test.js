export default async function decorate(block) {
  console.log('Decorating test block', block);

  // Step 1: find resource path
  const resource = block.dataset.aueResource;
  if (!resource) {
    console.warn('No resource found on block');
    return;
  }

  // Step 2: build model URL
  const modelUrl = resource.replace('urn:aemconnection:', '') + '.model.json';
  console.log('Fetching model from:', modelUrl);

  // Step 3: fetch JSON
  try {
    const response = await fetch(modelUrl);
    if (!response.ok) throw new Error('Model fetch failed');
    const data = await response.json();
    console.log('Model data:', data);

    // Step 4: read container items and render
    const items = data?.items || [];
    if (!items.length) {
      block.innerHTML = '<p>No items found</p>';
      return;
    }

    const html = items
      .map(
        (item) => `
        <div class="item">
          <h3>${item.title || 'Untitled'}</h3>
          <p>${item.description || ''}</p>
        </div>`
      )
      .join('');

    block.innerHTML = html;
  } catch (err) {
    console.error('Error fetching model:', err);
  }
}
