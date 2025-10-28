export default async function decorate(block) {
  const resource = block.getAttribute('data-aue-resource');
  if (!resource) return;

  console.log('🔍 Fetching AEM data for:', resource);

  // Extract path after 'urn:aemconnection:'
  const path = resource.replace('urn:aemconnection:', '');
  const url = `${window.location.origin}/content/_aemconnection${path}.json`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);
    const data = await response.json();

    console.log('✅ AEM block data:', data);

    const items = data?.items || [];
    if (!items.length) {
      console.warn('⚠️ No items found in AEM data.');
      block.innerHTML = '<p style="color:red">⚠️ No data returned from AEM.</p>';
      return;
    }

    // Clear old DOM
    block.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.className = 'test-wrapper';

    items.forEach(({ title, description }) => {
      const item = document.createElement('div');
      item.className = 'test-item';
      item.innerHTML = `
        <h3 class="test-title">${title || 'Untitled'}</h3>
        <p class="test-description">${description || ''}</p>
      `;
      wrapper.appendChild(item);
    });

    block.appendChild(wrapper);
  } catch (err) {
    console.error('❌ Error rendering AEM data:', err);
    block.innerHTML = '<p style="color:red">⚠️ Error fetching block data.</p>';
  }
}
