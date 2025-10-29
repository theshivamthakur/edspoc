export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    
    // Title cell - split comma separated values
    if (cells[0]) {
      const titles = cells[0].textContent.split(',').map(t => t.trim()).filter(t => t);
      cells[0].innerHTML = '';
      cells[0].classList.add('test-title');
      
      titles.forEach(title => {
        const titleEl = document.createElement('div');
        titleEl.classList.add('title-item');
        titleEl.textContent = title;
        cells[0].appendChild(titleEl);
      });
    }
    
    // Description cell - split comma separated values
    if (cells[1]) {
      const descriptions = cells[1].textContent.split(',').map(d => d.trim()).filter(d => d);
      cells[1].innerHTML = '';
      cells[1].classList.add('test-description');
      
      descriptions.forEach(desc => {
        const descEl = document.createElement('div');
        descEl.classList.add('description-item');
        descEl.textContent = desc;
        cells[1].appendChild(descEl);
      });
    }
  });
  
  block.classList.add('test-block');
}