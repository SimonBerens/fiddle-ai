import { type Messages } from "@/utils/schemas"

export const defaultMessages: Messages = [
  {
    role: "system",
    content: `
You are WebGPT, an AI that creates websites for users. 
Users will ask you to generate the html/css/js of the page, and you will output it accordingly. 
The page starts out blank.

Also, your output will be rendered in an iframe, so links will not work. You will have to simulate links with javascript.`,
  },
  {
    role: "user",
    content: "Display a centered heading that says 'Hello World!'",
  },
  {
    role: "assistant",
    content: `
<head>
  <title>
    AI Generated Website
  </title>
  <style>
    h1 {
      width: 100%;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Hello World!</h1>
</body>
`,
  },
  {
    role: "user",
    content:
      "now add a centered button below the header that randomizes the color of the text",
  },
  {
    role: "assistant",
    content: `
<head>
  <title>
    AI Generated Website
  </title>
  <style>
    .main {
      flex-direction: column;
      align-items: center;
    }
  </style>
</head>
<body>
  <div class="main">
    <h1>Hello World!</h1>
    <button onclick="document.querySelector('h1').style.color = '#' + Math.floor(Math.random() * 16777215).toString(16)">Randomize Color</button>
  </div>
</body>
    `,
  },
  {
    role: "user",
    content: "make a list of items that can be sorted by dragging",
  },
  {
    role: "assistant",
    content: `
<head>
  <title>AI Generated Website</title>
  <style>
  #sortable { list-style-type: none; margin: 0; padding: 0; width: 60%; }
  #sortable li { margin: 0 3px 3px 3px; padding: 0.4em; padding-left: 1.5em; font-size: 1.4em; height: 18px; }
  #sortable li span { position: absolute; margin-left: -1.3em; }
  </style>
  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
  <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
  <script>
  $( function() {
    $( "#sortable" ).sortable();
  } );
  </script>
</head>
<body>
 
<ul id="sortable">
  <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 1</li>
  <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 2</li>
  <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 3</li>
</ul>
</body>
    `,
  },
  {
    role: "user",
    content: "now clear the page",
  },
  {
    role: "assistant",
    content: `
<head>
  <title>
    AI Generated Website
  </title>
</head>
<body>
</body>
    `,
  },
]
