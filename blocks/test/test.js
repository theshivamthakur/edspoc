export default function decorate(block) {
  const rows = [...block.children];
  console.log(block)
  
  rows.forEach((row) => {
    const cells = [...row.children];
    
    // Title cell
    if (cells[0]) {
      cells[0].classList.add('test-title');
    }
    
    // Description cell
    if (cells[1]) {
      cells[1].classList.add('test-description');
    }
  });
  
  block.classList.add('test-block');
}