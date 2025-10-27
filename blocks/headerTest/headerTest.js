// In /blocks/header/header.js

export default async function decorate(block) {
  // ===== DEBUGGING: Capture initial state =====
  console.log('=== HEADER BLOCK DEBUGGING ===');
  console.log('Initial HTML:', block.cloneNode(true).innerHTML);
  
  // Log all rows before processing
  const rows = block.querySelectorAll(':scope > div');
  console.log('Total rows found:', rows.length);
  
  rows.forEach((row, index) => {
    const cols = [...row.children];
    console.log(`Row ${index}:`, {
      totalColumns: cols.length,
      column0Content: cols[0]?.innerHTML || 'EMPTY',
      column1Content: cols[1]?.innerHTML || 'EMPTY',
      column0Text: cols[0]?.textContent.trim() || 'EMPTY',
      column1Text: cols[1]?.textContent.trim() || 'EMPTY',
    });
  });
  
  // Try reading config
  const config = readBlockConfig(block);
  console.log('Parsed Config:', JSON.stringify(config, null, 2));
  
  // ===== YOUR DECORATION LOGIC STARTS HERE =====
  
  // ... rest of your code
}