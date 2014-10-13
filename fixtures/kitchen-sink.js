module.exports = [
  {
    "type": "fieldset",
    "title": "Stuff"
    /*,
    "items": [
      {
        "type": "tabs",
        "tabs": [
          {
            "title": "Simple stuff",
            "items": [
              {
                "key": "name",
                "placeholder": "Check the console",
                "onChange": "log(modelValue)",
                "feedback": "{'glyphicon': true, 'glyphicon-ok': hasSuccess(), 'glyphicon-star': !hasSuccess() }"
              },
              {
                "key": "favorite",
                "feedback": false
              }
            ]
          },
          {
            "title": "More stuff",
            "items": [
              "attributes",
              {
                "key": "shoesize",
                "feedback": false
              },
              "things",
              "dislike"
            ]
          }
        ]
      }
    ]
    */
  },
  {
    "type": "help",
    "helpvalue": "<hr>"
  },
  "soul",
  {
    "type": "conditional",
    "condition": "modelData.soul"
    /*,
    "items": [
      {
        "key": "soulserial",
        "placeholder": "ex. 666"
      }
    ]
    */
  },
  {
    "key": "date",
    "minDate": "2014-06-20"
  },
  {
    "key": "radio",
    "type": "radios",
    "titleMap": [
      {
        "value": "Transistor",
        "name": "Transistor <br> Not the tube kind."
      },
      {
        "value": "Tube",
        "name": "Tube <br> The tube kind."
      }
    ]
  },
  {
    "key": "radio2",
    "type": "radios-inline",
    "titleMap": [
      {
        "value": "Transistor",
        "name": "Transistor <br> Not the tube kind."
      },
      {
        "value": "Tube",
        "name": "Tube <br> The tube kind."
      }
    ]
  },
  {
    "key": "radiobuttons",
    "style": {
      "selected": "btn-success",
      "unselected": "btn-default"
    },
    "type": "radiobuttons",
    "notitle": true
  },
  {
    "type": "actions"/*,
    "items": [
      {
        "type": "submit",
        "style": "btn-info",
        "title": "Do It!"
      },
      {
        "type": "button",
        "style": "btn-danger",
        "title": "Noooooooooooo",
        "onClick": "sayNo()"
      }
    ]*/
  }
]
