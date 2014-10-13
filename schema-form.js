module.exports = {
 "$schema": "http://json-schema.org/draft-04/schema#",

 "type": "array",
 "items": { "$ref": "#/definitions/allDefs" },

 "definitions": {

   "allDefs": {
     "anyOf": [
       { "type": "string" },
       { "$ref": "#/definitions/fieldset" },
       { "$ref": "#/definitions/actions" },
       { "$ref": "#/definitions/conditional" },
       { "$ref": "#/definitions/select" },
       { "$ref": "#/definitions/button" },
       { "$ref": "#/definitions/submit" },
       { "$ref": "#/definitions/array" },
       { "$ref": "#/definitions/radiobuttons" },
       { "$ref": "#/definitions/tabs" },
       { "$ref": "#/definitions/subforms" },
       { "$ref": "#/definitions/tabarray" },
       { "$ref": "#/definitions/textarea" },
       { "$ref": "#/definitions/checkbox" },
       { "$ref": "#/definitions/help" }
     ]
   },

   "titleMap": {
     "title": "Title Map",
     "oneOf": [
       {
         "type": "array",
         "items": {
           "type": "object",
           "properties": {
             "value": { },
             "name": { "type": "string" }
           },
           "required": ["value", "name" ]
         }
       },{
         "type": "object"
       }
     ]
   },

   "fieldset": {
     "type": "object",
     "title": "Fieldset",
     "properties": {
       "type": { "type": "string", "pattern": "fieldset" },
       "items": { "$ref": "#/definitions/allDefs" }
     },
     "required": ["type", "items"]
   },

   "actions": {
     "type": "object",
     "title": "Actions",
     "properties": {
       "type": { "type": "string", "pattern": "actions" },
       "items": { "$ref": "#/definitions/allDefs" }
     },
     "required": ["type", "items"]
   },

   "conditional": {
     "type": "object",
     "title": "Conditional",
     "properties": {
       "type": { "type": "string", "pattern": "conditional" },
       "condition": { "type": "string" },
       "items": {
         "type": "array",
         "items": { "type": "string" }
       }
     },
     "required": ["type", "items", "condition"]
   },

   "select": {
     "type": "object",
     "title": "Select",
     "properties": {
       "type": { "type": "string", "pattern": "select" },
       "titleMap": { "$ref": "#/definitions/titleMap" }
     },
     "required": ["type", "titleMap"]
   },

   "button": {
     "type": "object",
     "title": "Button",
     "properties": {
       "type": { "type": "string", "pattern": "button" },
       "style": { "type": "string" },
       "title": { "type": "string" },
       "onClick": { "type": "string" }
     },
     "required": ["type"]
   },

   "radiobuttons": {
     "type": "object",
     "title": "Radio Buttons",
     "properties": {
       "key": { "type": "string" },
       "type": { "type": "string", "pattern": "radiobuttons" },
       "titleMap": { "$ref": "#/definitions/titleMap" },
       "style": {
         "type": "object",
         "properties": {
           "selected": { "type": "string" },
           "unselected": { "type": "string" }
         }
       }
     },
     "required": ["type", "titleMap"]
   },

   "tabs": {
     "type": "object",
     "title": "Tabs",
     "properties": {
       "type": { "type": "string", "pattern": "tabs" },
       "tabs": {
         "type": "array",
         "items": {
           "type": "object",
           "properties": {
             "title": { "type": "string" },
             "items": {
               "type": "array",
               "items": { "type": "string" }
             }
           }
         }
       }
     },
     "required": ["type", "tabs"]
   },

   "subforms": {
     "type": "object",
     "title": "Subforms",
     "properties": {
       "key": { "type": "string" },
       "add": { "type": "string" },
       "items": { "type": "string" },
       "style": {
         "type": "object",
         "properties": {
           "add": { "type": "string" },
           "remove": { "type": "string" }
         }
       }
     },
     // problem, anything goes.
     "required": ["key"]
   },

   "array": {
     "type": "object",
     "properties": {
       "key": { "type": "string" },
       "type": { "type": "string", "pattern": "array" },
       "add": { "type": "string" },
       "items": { "$ref": "#/definitions/noExists" },
       "style": {
         "type": "object",
         "properties": {
           "add": { "type": "string" }
         }
       }
     },
     // force array type to be present for now, to make sure
     // this does not validate other stuff.
     "required": ["type", "items"]
   },

   "tabarray": {
     "type": "object",
     "title": "Tab Array",
     "properties": {
       "type": { "type": "string", "pattern": "tabarray" },
       "tabType": { "type": "string", "enum": ["top", "left", "right"] },
       "title": { "type": "string" },
       "key": { "type": "string" },
       "add": { "type": "string" },
       "remove": { "type": "string" },
       "items": { "$ref": "#/definitions/allDefs" },
       "style": {
         "type": "object",
         "properties": {
           "remove": { "type": "string" },
           "add": { "type": "string" }
         }
       }
     },
     "required": ["type", "items"]
   },

   "help": {
     "type": "object",
     "title": "Help",
     "properties": {
       "type": { "type": "string", "pattern": "help" },
       "helpvalue": { "type": "string" }
     },
     "required": ["type", "helpvalue"]
   },

   "textarea": {
     "type": "object",
     "title": "Textarea",
     "properties": {
       "key": { "type": "string" },
       "title": { "type": "string" },
       "type": { "type": "string", "pattern": "textarea" }
     },
     "required": ["key", "type"]
   },

   "checkbox": {
     "type": "object",
     "title": "Checkbox",
     "properties": {
       "key": { "type": "string" },
       "title": { "type": "string" },
       "type": { "type": "string", "pattern": "checkbox" }
     },
     "required": ["key", "type"]
   },

   "submit": {
     "type": "object",
     "title": "Submit",
     "properties": {
       "key": { "type": "string" },
       "title": { "type": "string" },
       "style": { "type": "string" },
       "type": { "type": "string", "pattern": "submit" }
     },
     "required": ["type"]
   }

 }
}
