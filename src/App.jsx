import CodeEditor from './CodeEditor';

const App = () => {
  const code = `function greet() {
    console.log('Hello, world!');
  }`;

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Code Editor</h1>
      <CodeEditor initialCode={code} language="javascript" />
    </div>
  );
};

export default App;
