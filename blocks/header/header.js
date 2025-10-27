export default function decorate(block) {
 console.log("This is block",block)
 console.log([...block.children])
}