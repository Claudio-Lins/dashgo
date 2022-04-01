import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export function Profile() {
  return (
    <Flex align="center">
    <Box mr='4' textAlign="right">
      <Text>Claudio Lins</Text>
      <Text color='gray.300' fontSize="small">claudio.lins@me.com</Text>
    </Box>
    <Avatar size="md" name="Claudio Lins" src='https://github.com/claudio-lins.png'/>
  </Flex>
  )
}
