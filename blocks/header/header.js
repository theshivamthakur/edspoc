export default function decorate(block) {
  const items = {};
  
  [...block.querySelectorAll('[class*="item_"]')].forEach(el => {
    const match = el.className.match(/item_(\d+)/);
    if (match) {
      const index = match[1];
      items[index] = items[index] || [];
      items[index].push(el);
    }
  });
  
  console.log('Detected multifield items:', Object.keys(items).length);
  Object.entries(items).forEach(([i, els]) => {
    console.log(`\nItem ${i}:`);
    els.forEach(el => console.log(' ', el.outerHTML));
  });
}
