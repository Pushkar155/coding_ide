import React from 'react'
import { Box } from '@chakra-ui/react'
// import Navbar from '../navbar/Navbar'
import CodeEditor from './CodeEditor'

const Ide = () => {
  return (
    <>
      <Box minH="100vh" bg="#1A1A1A" color="gray.500" px={6} py={8}>
        <CodeEditor/>
      </Box>
    </>
  )
}

export default Ide