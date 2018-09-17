/*
  Phony Baloney Markup ...

 <!DOCTYPE html>
  <html>

  <head>
    <title>DOM DEMO</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <ul id="stuff">
      <li>Item a</li>
      <li>Item b</li>
      <li>Item c</li>
    </ul>
  </body>
  </html>
 */

// The "DOM" from that markup ...
var document = {
  html: {
    head: {
      title: {
        textContent: 'DOM DEMO',
      },
    },
    body: {
      ul: {
        id: 'stuff',
        children: [
          {
            li: {
              textContent: 'Item a',
            },
          },
          {
            li: {
              textContent: 'Item b',
            },
          },
          {
            li: {
              textContent: 'Item c',
            },
          },
        ],
      },
    },
    appendChild: function(element, childThing) {},
    getElementById: function(id) {/* return an element */ },
  },
};