import { SandpackConfig } from "@mdxeditor/editor";

const defaultSnippetContent = `
export default function App() {
  return (
    <div className="App"> 
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
`.trim()


export const simpleSandpackConfig: SandpackConfig = {
    defaultPreset: 'react',
    presets: [
        {
            label: 'React',
            name: 'react',
            meta: 'live react',
            sandpackTemplate: 'react',
            sandpackTheme: 'light',
            snippetFileName: '/App.js',
            snippetLanguage: 'jsx',
            initialSnippetContent: defaultSnippetContent
        },
    ]
}