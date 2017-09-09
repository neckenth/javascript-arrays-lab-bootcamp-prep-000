const app = "I don't do much."
var kittens = [
    'kitten1',
    'kitten2',
    'kitten3'
]
function destructivelyAppendKitten(a, name) {
    a = kittens
    a.push(name)
}
