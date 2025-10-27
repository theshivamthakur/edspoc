// blocks/header/header.js (Conceptual)
export default function decorate(block) {
  // 1. Get the data exposed by the model (e.g., from a property named 'data')
  const { navigation, appName, copyright } = block.data; 
  console.log(block);

  // 2. Create the main navigation container
  const navContainer = document.createElement('ul');

  // 3. Iterate over the multifield data
  if (navigation && Array.isArray(navigation)) {
    navigation.forEach((item) => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      
      // 4. Read the semantic property names
      link.href = item.menuLink || '#'; 
      link.textContent = item.menuLabel || 'Menu Item'; 
      
      // (Handle menuIcon and other fields here)

      listItem.append(link);
      navContainer.append(listItem);
    });
  }

  // 5. Clear the default block content and append your new HTML
  block.innerHTML = ''; 
  block.append(navContainer);
  
  // (Append other fields like appName and copyright text)
}