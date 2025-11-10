import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Create new structure by replacing direct children and their immediate children (level1)
  const fragment = document.createDocumentFragment();

  [...block.children].forEach((child) => {
    const newChild = document.createElement(child.tagName.toLowerCase());
    // Replace original child with newChild for instrumentation
    moveInstrumentation(child, newChild);
    newChild.className = child.className;

    // Only support nested structure up to level1: replace immediate children of child
    [...child.children].forEach((c1) => {
      const newC1 = document.createElement(c1.tagName.toLowerCase());
      moveInstrumentation(c1, newC1);
      newC1.className = c1.className;

      // Move remaining inner nodes (text, images, other elements) into newC1
      while (c1.firstChild) {
        newC1.append(c1.firstChild);
      }
      newChild.append(newC1);
    });

    // If child had no children, ensure we preserve its text content or nodes
    if (child.children.length === 0) {
      while (child.firstChild) {
        newChild.append(child.firstChild);
      }
    }

    fragment.append(newChild);
  });

  // Clear original block and append rebuilt structure
  block.textContent = '';
  block.append(fragment);
}
