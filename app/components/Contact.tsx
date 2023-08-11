import { Heading, Text, Input, Button } from "@chakra-ui/react";
import styled from "styled-components";
import { size } from "~/size";
import { useForm, SubmitHandler } from "react-hook-form";
import { Textarea } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
const MainContainer = styled.div`
  width: 100%;
  padding: 50px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: ${size.md}) {
    padding-top: 0px;
  }
`;
type Inputs = {
  name: string;
  email: string;
  text: string;
};
const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  @media (max-width: ${size.md}) {
    width: 400px;
  }
`;
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const handleClick = () => {
    window.location.href = `mailto:daria.czupreta@gmail.com`;
  };
  return (
    <MainContainer id={"contact"}>
      <Heading as="h6" size="lg" mb={"20px"} mt={"40px"}>
        {" "}
        Contact{" "}
      </Heading>
      <TextWrap>
        <Text fontSize="sm" color={"#757575"}>
          Get in touch or shoot me an email directly on
        </Text>
        <Text fontSize="sm">
          <Link
            ml={"5px"}
            href={`mailto:daria.czupreta@gmail.com}`}
            onClick={handleClick}
            color="#673AB7"
          >
            {" "}
            daria.czupreta@gmail.com{" "}
          </Link>
        </Text>
      </TextWrap>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form>
          <Input
            focusBorderColor="#53735E"
            placeholder="Name"
            _placeholder={{ fontSize: "sm" }}
            style={{ margin: "10px" }}
            {...register("name", { required: true, maxLength: 60 })}
          ></Input>
          <Input
            focusBorderColor="#53735E"
            placeholder="Email"
            _placeholder={{ fontSize: "sm" }}
            style={{ margin: "10px" }}
            {...register("email", { required: true, maxLength: 60 })}
          ></Input>
          <Textarea
            focusBorderColor="#53735E"
            placeholder="Message"
            _placeholder={{ fontSize: "sm" }}
            style={{ margin: "10px" }}
            {...register("text", { required: true, maxLength: 60 })}
          />
          {errors.text?.type === "required" && (
            <span style={{ color: "red" }}>This field is required!</span>
          )}
          {errors.text?.type === "maxLength" && (
            <p style={{ color: "red" }} role="alert">
              Max Length is 18 symbols
            </p>
          )}
          <Button
            maxW={"60%"}
            size={"sm"}
            background="#D1C4E9"
            padding={5}
            my={3}
            color={"whiteAlpha"}
            _hover={{ color: "black", bg: "#F2F2F2" }}
            type="submit"
          >
            Send Message
          </Button>
        </Form>
      </form>
    </MainContainer>
  );
};

export default Contact;
