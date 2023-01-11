import { useSession, signIn, signOut } from "next-auth/react"
import {Button} from '@chakra-ui/react'
import Dashboard from "./Dashboard"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Dashboard />
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  )
}




// import { Flex, Box, Heading, Input, Button, useColorMode, useColorModeValue} from '@chakra-ui/react';
// import {IoSunny, IoMoon} from 'react-icons/io5';
// import {useState} from 'react';

// const Login = () => {

//     const {toggleColorMode} = useColorMode()
//     const [toggle, setToggle] = useState(false)

//     const formBackGround = useColorModeValue("gray.100", "gray.700")

//   return (
//     <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"}>
//         <Heading mr={12}><span>Daily</span> Dynamo</Heading>
//         <Flex direction={"column"} background={formBackGround} p={12} rounded={6} position={"relative"} width={"md"}>
//             <Heading size={"md"} mb={6}>Log In</Heading>
//             <Input placeholder='E-mailadres' variant={"filled"} mb={3} type="email" />
//             <Input placeholder="Password"
//             variant={"filled"}
//             type="password"
//             mb={6}
//           />
//           <Button colorScheme={"teal"}>Log In</Button>
//         <Box
//             position={"absolute"}
//             top={2}
//             right={2}
//             cursor={"pointer"}
//             onClick={() => {
//                 toggleColorMode();
//                 setToggle(!toggle)
//             }}
//         >
//             { toggle ? <IoMoon /> : <IoSunny /> }
//         </Box>
//         </Flex>
//     </Flex>
//   )
// }

// export default Login