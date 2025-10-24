export default function decorate(block) {
  console.log('Total rows:', block.children.children.length);
  
  [...block.children].forEach((row, i) => {
    console.log(`Row ${i}:`, row.outerHTML);
    console.log(`Row ${i} has ${row.children.children.length} cells`);
    
    [...row.children].forEach((child) => {
      [...child.children].forEach((cell, j) => {
      console.log(`  Cell ${j}:`, cell.innerHTML);
    })
    });
  });
  
  // Don't add any decoration yet, just log
}