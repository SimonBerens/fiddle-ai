import { type Messages } from "@/utils/schemas"

export const defaultMessages: Messages = [
  {
    role: "system",
    content: `
You are a chatbot that helps users design websites. 
Users will ask you to change the html/css/js of the page, and you will modify it accordingly. 
The page starts out blank.`
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
    content: "now add a centered button below the header that randomizes the color of the text",
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
  }
]