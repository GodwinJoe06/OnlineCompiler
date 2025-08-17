import { useRef, useState , useEffect } from "react";
import { Box, HStack , Text , Textarea} from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("java");
  const [custominput, setCustomInput] = useState("");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

   useEffect(() => {
    const blockEvent = (e) => e.preventDefault();

    const blockShortcuts = (e) => {
      if ((e.ctrlKey || e.metaKey) && ['s'].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', blockShortcuts);

    return () => {
      document.removeEventListener('keydown', blockShortcuts);
    };
  }, []);


return (
    <Box>
      <HStack spacing={4} align="start">
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{ minimap: { enabled: false } }}
            height="65vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />

          <Box mt={4}>
            <Text fontWeight="bold" mb={2}>Custom Input (stdin)</Text>
            <Textarea
              placeholder="Enter input here..."
              value={custominput}
              onChange={(e) => setCustomInput(e.target.value)}
              height="100px"
              bg="gray.800"
              color="white"
            />
          </Box>
        </Box>

        <Output editorRef={editorRef} language={language} input={custominput}/>
      </HStack>
    </Box>
  );
};

export default CodeEditor;