// Chakra imports
import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import Details from "assets/img/ecommerce/Details.png";
// Custom components
import Card from "components/card/Card";
import React from "react";
// Assets
import { MdDownload, MdPrint, MdShare } from "react-icons/md";
import Content from "views/admin/main/ecommerce/orderDetails/components/Content";

export default class ComponentToPrint extends React.Component {
  // for react-to-print to work, it must be called from a class based component
  render() {
    const { bgButton, bgFocus, bgHover, ...rest } = this.props;

    return (
      <Card
        {...rest}
        justifySelf='center'
        alignSelf='center'
        m='10px'
        my='0px'
        p='24px'>
        <Card
          backgroundImage={Details}
          backgroundRepeat='no-repeat'
          bgSize='cover'
          bgPosition='10%'
          flexDirection='row'
          p={{ base: "20px", md: "50px" }}
          py='50px'>
          <Flex direction='column' color='white' h='100%' w='100%'>
            <Text
              lineHeight='100%'
              fontSize={{ sm: "lg", md: "30px", lg: "36px", xl: "40px" }}
              fontWeight='bold'>
              Order #09746
            </Text>
            <Text fontSize={{ base: "md", md: "xl" }} fontWeight='regular'>
              July 27, 2022 at 09:44 AM
            </Text>
          </Flex>
          <Flex alignSelf='start' mt={{ base: "20px", md: "0px" }}>
            <Button
              onClick={() => this.props.handlePrint()}
              ms='auto'
              me='10px'
              align='center'
              justifyContent='center'
              bg={bgButton}
              _hover={bgHover}
              _focus={bgFocus}
              _active={bgFocus}
              p='7px'
              minW='unset'
              h='32px'
              lineHeight='100%'
              borderRadius='10px'>
              <Icon as={MdPrint} color='white' w='18px' h='18px' />
            </Button>
            <Button
              align='center'
              me='10px'
              justifyContent='center'
              bg={bgButton}
              _hover={bgHover}
              _focus={bgFocus}
              _active={bgFocus}
              p='7px'
              minW='unset'
              h='32px'
              lineHeight='100%'
              borderRadius='10px'>
              <Icon as={MdDownload} color='white' w='18px' h='18px' />
            </Button>
            <Button
              align='center'
              justifyContent='center'
              bg='linear-gradient(293.45deg, #FA709A 0%, #FEE140 92.27%)'
              _hover={{
                bg: "linear-gradient(293.45deg, #FA709A 0%, #FEE140 92.27%)",
              }}
              _focus={{
                bg: "linear-gradient(293.45deg, #FA709A 0%, #FEE140 92.27%)",
              }}
              _active={{
                bg: "linear-gradient(293.45deg, #FA709A 0%, #FEE140 92.27%)",
              }}
              p='7px'
              minW='unset'
              h='32px'
              lineHeight='100%'
              borderRadius='10px'>
              <Icon as={MdShare} color='white' w='18px' h='18px' />
            </Button>
          </Flex>
        </Card>
        <Content />
      </Card>
    );
  }
}
