export default function decorate(block) {
 console.log("This is block",block)
 a=[...block.children]
 console.log(a)
}