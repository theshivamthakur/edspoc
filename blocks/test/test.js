export default async function decorate(block) {
  const resource = block.getAttribute('data-aue-resource');
  if (!resource) return;

  try {
    const res = await fetch(`/aem/api/assets?resource=${encodeURIComponent(resource)}`);
    const data = await res.json();
    console.log('Fetched model:', data);

    // ✅ Use the raw model data
    const items = data?.updates?.[0]?.raw?.items || [];

    block.innerHTML = '';
    items.forEach(({ title, description }) => {
      const div = document.createElement('div');
      div.className = 'test-item';
      div.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
      `;
      block.appendChild(div);
    });
  } catch (err) {
    console.error('Failed to render block:', err);
  }
}
