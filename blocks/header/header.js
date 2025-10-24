export default function decorate(block) {
  console.log('Debugging EDS block structure...');
  console.log('Total top-level children:', block.children.length);

  function logStructure(element, level = 0) {
    const indent = '  '.repeat(level);
    const tagName = element.tagName ? element.tagName.toLowerCase() : 'text';
    const content = element.textContent.trim().replace(/\s+/g, ' ').slice(0, 80);

    console.log(`${indent}${tagName}: ${content ? `"${content}"` : '[empty]'}`);
    
    // Log dataset or attributes if useful for multifields
    if (element.dataset && Object.keys(element.dataset).length) {
      console.log(`${indent}  dataset:`, element.dataset);
    }
    
    [...element.children].forEach(child => logStructure(child, level + 1));
  }

  [...block.children].forEach((child, i) => {
    console.log(`\nRow ${i}:`);
    logStructure(child, 1);
  });
}
