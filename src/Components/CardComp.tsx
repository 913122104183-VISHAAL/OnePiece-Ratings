import { Flex, Heading, Button, Text } from "@radix-ui/themes";
import { useState } from "react";

const CardComp = ({
  name,
  image,
  type,
  handleChange,
}: {
  name: string;
  image: string;
  type: string;
  handleChange: (name: string, status: string, type: string) => void;
}) => {
  const [status, setStatus] = useState("neutral");

  return (
    <Flex
      gap="4"
      direction={"column"}
      className="max-w-[320px] bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
    >
      <img
        src={image}
        className="w-[260px] h-[200px] object-cover rounded-t-lg"
        alt={name}
      />
      <Flex direction={"column"} align={"center"} p="4" gap="3">
        <Heading
          as="h3"
          size="4"
          className="text-gray-800 text-center font-semibold"
        >
          {name}
        </Heading>
        <Flex gap={"2"} align={"center"}>
          <Button
            color="red"
            size="2"
            className="bg-red-500 text-white hover:bg-red-600 transition-colors duration-300 rounded-full"
            onClick={() => {
              setStatus("dislike");
              handleChange(name, "dislike", type);
            }}
          >
            Dislike
          </Button>
          <Text
            size="3"
            className="text-lg font-medium px-6 py-1 bg-gray-100 rounded-lg"
          >
            {status}
          </Text>
          <Button
            color="green"
            size="2"
            className="bg-green-500 text-white hover:bg-green-600 transition-colors duration-300 rounded-full"
            onClick={() => {
              setStatus("like");
              handleChange(name, "like", type);
            }}
          >
            Like
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardComp;
