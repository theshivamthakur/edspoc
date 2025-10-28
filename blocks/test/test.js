export default function decorate(block) {
  console.log('Test block rendering:', block);

  // Each row = one container item
  const rows = [...block.firstElementChild.children];
  console.log('Total items:', rows.length);

  rows.forEach((row, i) => {
    const cells = [...row.children];
    const title = cells[0]?.textContent?.trim() || '';
    const desc = cells[1]?.textContent?.trim() || '';

    console.log(`Item ${i + 1}:`, { title, desc });

    // Optional: display nicely
    row.innerHTML = `
      <div class="item">
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>
    `;
  });

  block.classList.add('test-block');
}
