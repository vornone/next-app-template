"use client";


import React from "react";
import { Box, Button, Card, Center, Checkbox, Flex, Input, InputWrapper, Stack, Text, TextInput, Title } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import { LuUserRound } from "react-icons/lu";
import { LuLockKeyhole, LuEye } from "react-icons/lu";

function login() {
  const IsMobile = useMediaQuery('(min-width: 56.25em)');
  const label = (label:String, icon:React.ReactNode)=>{
    return (<>{icon} {label}</>)
  }
  return (
  <Center w={'100dvw'} h={'100dvh'} >
      <Card w='30%' h='60%' radius='lg' p={'xl'}>
        <Stack  w={'100%'} h={'100%'}   justify="space-between">
        <Stack align="left" gap={0} >
          <Title >
            Welcome Back
          </Title>
          <Text size="sm" c="gray.6">
            Enter your credentials
          </Text>
        </Stack>
        <Stack>

          <TextInput label={label('Username or Email', <LuUserRound />)} placeholder="Enter your username or email"/>
          <TextInput label={label('Password', <LuLockKeyhole />)} rightSection={<LuEye />} placeholder="Enter your password"/>
          <Flex w={'100%'} justify={'space-between'}>
          <Checkbox label="Remember me" color="teal" />
          <Text size="sm" c="gray.6" >
          <a href={'/register'}>Forget password?</a> </Text>
        </Flex>
        </Stack>

        <Button variant="filled" color={'teal.8'}>Sign In</Button>
        <Text ta={'center'} size="sm">
          Dont have an account? <a href="/api/auth/login">Register</a>
        </Text>
        </Stack>

      </Card>
  </Center>);
}

export default login;
