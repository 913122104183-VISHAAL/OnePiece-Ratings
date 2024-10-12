import { Flex, Heading } from "@radix-ui/themes";
import { yonkos } from "../utils/consts";
import CardComp from "./CardComp";

const Yonkos = ({
  handleLikeChange,
}: {
  handleLikeChange: (name: string, status: string, type: string) => void;
}) => {
  return (
    <Flex direction={"column"} gap={"6"} p={"6"}>
      <Heading className="bg-black text-white max-w-fit px-4 py-1 rounded-2xl">
        Yonkos
      </Heading>
      <Flex wrap="wrap" gap="5">
        {yonkos.map((yonko) => (
          <CardComp
            key={yonko.name}
            name={yonko.name}
            image={yonko.image}
            type="yonko" // Use the correct type for Yonkos
            handleChange={handleLikeChange} // Pass the handleLikeChange function
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Yonkos;
