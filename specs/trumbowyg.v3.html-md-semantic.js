const mapping = {
  strong: {
    html: ['<strong>', '<b>', '<span style="font-weight: bold;">'],
    md: ['**blah**', '__blah__'],
  },
  emphasis: {
    html: ['<em>', '<i>', '<span style="font-style: italic;">'],
    md: ['*blah*', '_blah_'],
  },
  del: {
    html: ['<del>', '<s>', '<span style="text-decoration: overline;">'],
    md: ['~~blah~~'],
  },
  paragraph: {
    html: ['<p>'],
    md: ['\n\n'],
  },
  unorderedList: {
    html: ['<ul><li>'],
    md: ['-', '+'],
  },
  orderedList: {
    html: ['<ol><li>'],
    md: ['1.'],
  },
  image: {
    html: ['<img src="url" alt="alt text">'],
    md: ['![alt text](url)']
  },
  link: {
    html: ['<a href="url">blah</a>'],
    md: ['[blah](url)']
  },
  horizontalRule: {
    html: ['<hr>'],
    md: ['---', '***', '___'],
  },
  header1: {
    html: ['<h1>'],
    md: ['# blah', 'blah\n==='],
  },
  header2: {
    html: ['<h2>'],
    md: ['## blah', 'blah\n---'],
  },
  header3: {
    html: ['<h3>'],
    md: ['### blah'],
  },
  header4: {
    html: ['<h4>'],
    md: ['#### blah'],
  },
  header5: {
    html: ['<h5>'],
    md: ['##### blah'],
  },
  header6: {
    html: ['<h6>'],
    md: ['###### blah'],
  },
  quote: {
    html: ['<blockquote>'],
    md: ['>'],
  },
  code: {
    html: ['<code>'],
    md: ['`blah`', '```multiline code```', '    blah'],
  },
}