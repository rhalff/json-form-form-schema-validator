module.exports = [
  "select",
  {
    "key": "select2",
    "type": "select",
    "titleMap": {
      "a": "A",
      "b": "B",
      "c": "C"
    }
  },
  {
    "key": "noenum",
    "type": "select",
    "titleMap": [
      {
        "value": "a",
        "name": "A"
      },
      {
        "value": "b",
        "name": "B"
      },
      {
        "value": "c",
        "name": "C"
      }
    ]
  },
  "array",
  {
    "key": "array2",
    "type": "checkboxes",
    "titleMap": [
      {
        "value": "a",
        "name": "A"
      },
      {
        "value": "b",
        "name": "B"
      },
      {
        "value": "c",
        "name": "C"
      }
    ]
  },
  {
    "key": "radios",
    "type": "radios",
    "titleMap": [
      {
        "value": "c",
        "name": "C"
      },
      {
        "value": "b",
        "name": "B"
      },
      {
        "value": "a",
        "name": "A"
      }
    ]
  },
  {
    "key": "radiobuttons",
    "type": "radiobuttons",
    "titleMap": [
      {
        "value": false,
        "name": "No way"
      },
      {
        "value": true,
        "name": "OK"
      }
    ]
  }
]
