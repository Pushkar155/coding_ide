import { Box, HStack } from "@chakra-ui/react";
import React, { useState,useRef } from "react";
import Editor from "@monaco-editor/react";
import LanguageSelector from "./Code_lang";
import { CODE_SNIPPETS } from "./LangVersion";
import Output from "./Output";

const CodeEditor = () => {

    const editorRef =useRef()
    const  [language, setLanguage] = useState("python");

    const [value,setValue]=useState('');
    const onMount = (editor)=>{
        editorRef.current=editor;
        editor.focus();
    }
    const onSelect = (language) => {
        setLanguage(language);
        setValue(CODE_SNIPPETS[language]);
      };

  return (
    <Box>
      <HStack spacing={4}>
        <Box width="50%">
        <LanguageSelector language={language} onSelect={onSelect}/>
      <Editor
        height="60vh"
        theme="vs-dark"
        // width='50%'
        language={language}
        value={value}
        onChange={
            (value,event)=>setValue(value)
        }
        onMount={onMount}
        defaultValue={CODE_SNIPPETS[language]}
      />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};

export default CodeEditor;
