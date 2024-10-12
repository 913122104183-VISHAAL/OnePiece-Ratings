import { Flex, Heading } from "@radix-ui/themes";
import { admirals } from "../utils/consts";
import CardComp from "./CardComp";

const Admirals = ({
  handleLikeChange,
}: {
  handleLikeChange: (name: string, status: string, type: string) => void;
}) => {
  return (
    <Flex direction={"column"} gap={"6"} p={"6"}>
      <Heading className="bg-black text-white max-w-fit px-4 py-1 rounded-2xl">
        Admirals
      </Heading>
      <Flex wrap={"wrap"} gap="5" >
        {admirals.map((admiral) => (
          <CardComp
            key={admiral.name}
            name={admiral.name}
            image={admiral.image}
            type="admiral"
            handleChange={handleLikeChange}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Admirals;
