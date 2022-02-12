#Form Generator
App can generate form from json scheme in the certain format. It supports different types of inputs (such as text, text area, number, checkbox, radio button) and buttons, also ypu can config inputs properties, for example disable them or mark as required. Example data: 

```json
{
  "title":"Form",
  "items":[
    {
      "label":"Text Input",
      "type":"text",
      "name":"textinput1"
    },
    {
      "label":"Disabled Input",
      "type":"text",
      "name":"textinput2",
      "disabled": true
    },
    {
      "label":"Required Input",
      "type":"text",
      "name":"textinput3",
      "required": true
    },
    {
      "label":"Number Input",
      "type":"number",
      "name":"numberinput1"
    },
    {
      "label":"Text area",
      "type":"textarea",
      "name":"textarea1"
    },
    {
      "type":"date",
      "name":"date"
    },
    {
      "type":"checkbox",
      "label":"checkbox"
    },
    {
      "type":"checkbox",
      "name":"disabled checkbox",
      "disabled": true
    },
    {
      "label":"Radio",
      "type":"radio",
      "name":"radio1",
      "value":"1",
      "radioOptions":["first", "second"]
    },
    {
      "label":"Radio",
      "type":"radio",
      "name":"radio1",
      "value":"1",
      "radioOptions":[]
    }
  ],
  "controls":[
    {
      "label":"Ok",
      "type":"submit"
    },
    {
      "label":"Reset",
      "type":"reset"
    }
  ]
}

```
The following technologies were used in the project: Typescript, React, material-ui, eslint and prettier. You can try the app from the link - https://epic-shockley-5bcd97.netlify.app/.

