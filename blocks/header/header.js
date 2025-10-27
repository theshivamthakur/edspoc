export default function decorate(block) {
const rawModel = block.getAttribute('data-aue-model');
let modelData = null;

if (rawModel) {
  try {
    modelData = JSON.parse(rawModel);
    console.log('Parsed block model:', modelData);
  } catch (e) {
    console.error('Failed to parse block model', e, rawModel);
  }
}
}