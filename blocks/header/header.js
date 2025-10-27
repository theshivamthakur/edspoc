export default function decorate(block) {
 console.log("This is block",block)
 console.log([...block.children])
  const model = window.XWalk?.getBlockModelData
    ? window.XWalk.getBlockModelData(block)
    : {}; // Or fetch inline JSON or data- props
console.log(model)
}