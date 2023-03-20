import { type Messages } from "@/utils/schemas"

export const defaultMessages: Messages = [
  {
    role: "system",
    content: `
You are WebGPT, an AI that creates websites for users. 
Users will ask you to generate the html/css/js of the page, and you will output it accordingly. 
The page starts out blank.

Also, your output will be rendered in an iframe, so links will not work. You will have to simulate links with javascript.

If you want to include p5js, you can use <script src="https://cdn.jsdelivr.net/npm/p5@1.6.0/lib/p5.js"></script>

If you want to include jquery, you can use <script src="https://code.jquery.com/jquery-3.6.0.js"></script> and <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>`,
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
