module.exports = [
  {
    "type": "help",
    "helpvalue": "<h4>Array Example</h4><p>Try adding a couple of forms, reorder by drag'n'drop.</p>"
  },
  {
    "type": "array",
    "key": "comments",
    "add": "New",
    "style": {
      "add": "btn-success"
    },
    /* OK this gives errors, since there are rather a lot items, it must be debugged per addition
     * right now it seems 'items' is just not recognized correctly */
    "items": [
      "comments[].name",
      "comments[].email",
      {
        "type": "conditional",
        "condition": "model.comments[arrayIndex].email",
        "items": [
          {
            "key": "comments[].spam",
            "type": "checkbox",
            "title": "Yes I want spam."
          }
        ]
      },
      {
        "key": "comments[].comment",
        "type": "textarea"
      }
    ]
  },
  {
    "type": "submit",
    "style": "btn-info",
    "title": "OK"
  }
]
