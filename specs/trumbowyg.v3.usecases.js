const Trumbowyg = {
  actions: {
    strong: {
      wrap(node) {
        node.toggleAttribute('strong')
      },
    },
    emphasis: {},
    del: {},
    paragraph: {},
    unorderedList: {},
    orderedList: {},
    image: {},
    link: {},
    horizontalRule: {},
    header1: {},
    header2: {},
    header3: {},
    header4: {},
    header5: {},
    header6: {},
    quote: {},
    code: {},
  }
}

// ================================

const actions = Trumbowyg.actions
const editor = new Trumbowyg('#editor', {
  actions,
  buttons: [
  ]
})
