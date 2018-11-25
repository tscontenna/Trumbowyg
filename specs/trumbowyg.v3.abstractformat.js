const content = [
  {"string": "That's the title!", "attributes": {"header": 1}},
  {"string": "Hello "},
  {"string": "World ", "attributes": {"strong": true}},
  {"string": "World ", "attributes": {"emphasis": true, "color": "#ffea00"}},
  {"string": "Le monde ", "attributes": {"del": true, "background": "#ffea00"}},
  {"string": "Le monde ", "attributes": {"del": true, "strong": true}},
  {"string": "Le monde ", "attributes": {"del": true}},
  {"string": "ceci est un lien ", "attributes": {"link": "https://alex-d.github.com/Trumbowyg", "title": "RTFM", "target": "blank"}},
  {"string": "ceci est un lien ", "attributes": {"link": "https://alex-d.github.com/Trumbowyg"}},
  {"string": "ceci est un lien", "attributes": {"link": "https://alex-d.github.com/Trumbowyg"}},
  {"string": "first list", "attributes": {"list": "unordered"}},
  {"string": "second item with sublist", "attributes": {"list": "unordered"}},
  {"string": "first item in sublist", "attributes": {"list": "ordered", "indent": 1}},
]


selection = [3, 8] // "'s th"
editor.format('strong')

content = [
  {"string": "That", "attributes": {"header": 1}},
  {"string": "'s th", "attributes": {"header": 1, "strong": true}},
  {"string": "e title!", "attributes": {"header": 1}},
  // ...
]

// Render HTML
content.reduce((acc, node, index, nodes) => {
  const previousNode = nodes[index - 1]
  const nextNode = nodes[index + 1]

  const shouldOpenTag = !!node.attributes.header && node.attributes.header !== previousNode.attributes.header
  if (shouldOpenTag) {
    acc += '<h' + node.attributes.header + '>'
  }

  acc += node.string

  const shouldCloseTag = !!node.attributes.header && node.attributes.header !== nextNode.attributes.header
  if (shouldCloseTag) {
    acc += '</h' + node.attributes.header + '>'
  }
}, '')

// Render Markdown # style
content.reduce((acc, node, index, nodes) => {
  const previousNode = nodes[index - 1]
  const nextNode = nodes[index + 1]

  const shouldOpenTag = !!node.attributes.header && node.attributes.header !== previousNode.attributes.header
  if (shouldOpenTag) {
    acc += new Array(node.attributes.header + 1).join('#')
  }

  acc += node.string
}, '')

// Render Markdown === or --- or ### style
content.reduce((acc, node, index, nodes) => {
  const previousNode = nodes[index - 1]
  const nextNode = nodes[index + 1]

  const shouldOpenTag = !!node.attributes.header && node.attributes.header !== previousNode.attributes.header
  if (shouldOpenTag && node.attributes.header > 2) {
    acc += new Array(node.attributes.header + 1).join('#')
  }

  acc += node.string

  const shouldCloseTag = !!node.attributes.header && node.attributes.header !== nextNode.attributes.header
  if (shouldCloseTag) {
    if (node.attributes.header === 1) {
      acc += '\n==='
    } else if (node.attributes.header === 2) {
      acc += '\n---'
    }
  }
}, '')
