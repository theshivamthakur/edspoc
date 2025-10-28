export default async function decorate(block) {
  // Get the block's resource path from data attribute
  const resource = block.getAttribute('data-aue-resource');
  
  if (!resource) return;
  
  // Extract path from URN
  const path = resource.replace('urn:aemconnection:', '');
  
  try {
    // Fetch the actual content data from AEM
    const response = await fetch(`${path}.model.json`);
    const data = await response.json();
    
    // Clear the block
    block.innerHTML = '';
    
    // Render items
    if (data.items && Array.isArray(data.items)) {
      const container = document.createElement('div');
      container.className = 'items-container';
      
      data.items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        
        const title = document.createElement('h3');
        title.textContent = item.title || '';
        
        const description = document.createElement('p');
        description.textContent = item.description || '';
        
        itemDiv.appendChild(title);
        itemDiv.appendChild(description);
        container.appendChild(itemDiv);
      });
      
      block.appendChild(container);
    }
  } catch (error) {
    console.error('Error loading block data:', error);
  }
}