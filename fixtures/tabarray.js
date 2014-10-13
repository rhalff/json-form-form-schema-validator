module.exports = [
  {
    "type": "help",
    "helpvalue": "<h4>Tabbed Array Example</h4><p>Tab arrays can have tabs to the left, top or right.</p>"
  },
  {
    "key": "comments",
    "type": "tabarray",
    "add": "New",
    "remove": "Delete",
    "style": {
      "remove": "btn-danger"
    },
    "title": "value.name || 'Tab '+$index",
    "items": [
      "comments[].name",
      "comments[].email",
      {
        "key": "comments[].comment",
        "type": "textarea"
      }
    ]
  },
  {
    "type": "submit",
    "style": "btn-default",
    "title": "OK"
  }
]
