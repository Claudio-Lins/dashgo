import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Claudio Lins</Text>
          <Text color="gray.300" fontSize="small">
            claudio.lins@me.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Claudio Lins"
        src="https://github.com/claudio-lins.png"
      />
    </Flex>
  );
}
