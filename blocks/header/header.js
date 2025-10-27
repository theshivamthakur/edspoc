export default function decorate(block) {
 console.log("This is block",block)
 console.log([...block.children])
  const model = window.XWalk.getBlockModelData

console.log(model)
}