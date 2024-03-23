# Webfolio

I have open sorced this web app to inspire and help any developer wanting to implement a portfolio site for themselves. Feel free to fork this repository and make your own portfolio. This site is geared towards showcasing project based work highlighting the technology stack utilzed in each project.

## Features

- TSX function components
- Firebase cloud functions
- Custom SVG framework icons and vectors
- No JQuery
- React Bootstrap
- Responsive Design

### Requirements

- Node
- NPM
- React

### Firebase

If you would like to use Firebase

- Create a project in your Firebase console
- Create a local .env file in your project directory
- Place your API key information in the .env file with REACT*APP* in front of the key name
  - Example: REACT_APP_apiKey="Your API Key"

### Custom SVG Framework Icon Pack - More to come

![Framework Icons](https://github.com/PinedaVictor/webfolio/blob/master/src/Assets/images/frameworkIcons.png)

### File Structure

```
├── LICENSE
├── README.md
├── firebase.json
├── functions                         Firebase cloud functions as back-end
│   ├── lib
│   │   ├── PinedaVictor.pdf          If you would like to implement the "get resume function"
                                      upload your resume in this directory.
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   └── index.ts
│   ├── tsconfig.dev.json
│   └── tsconfig.json
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── images
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.scss
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── Assets
│   │   ├── fonts                       Font Sources
│   │   ├── icons                       Custom Platform Icons
│   │   ├── images                      Project Assets
│   │   └── vectors                     Custom Vectors
│   ├── Components
│   │   ├── ContactForm.tsx
│   │   ├── Parallax.tsx
│   │   ├── ResumeForm.tsx
│   │   ├── hooks
│   │   │   └── CustomForm.tsx
│   │   ├── sections
│   │   │   ├── Contact.tsx
│   │   │   ├── Dexterity.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── index.ts
│   │   └── ui
│   │       ├── Drawer.tsx
│   │       ├── Layout.tsx
│   │       └── ProjectCard.tsx
│   ├── Config
│   │   ├── Firebase.ts
│   │   └── index.ts
│   ├── Data
│   ├── Pages
│   │   ├── AllProjects.tsx
│   │   ├── Home.tsx
│   │   └── index.ts
│   ├── Styles
│   │   ├── HomePage.scss
│   │   └── components
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
└── tsconfig.json
```

### License

[BSD 3-Clause](https://github.com/PinedaVictor/webfolio/blob/master/LICENSE)
