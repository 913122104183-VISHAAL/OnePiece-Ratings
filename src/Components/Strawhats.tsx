import { Flex, Heading } from "@radix-ui/themes";
import { strawhats } from "../utils/consts"; // Assuming this imports the correct data
import CardComp from "./CardComp";

const Strawhats = ({
  handleLikeChange,
}: {
  handleLikeChange: (name: string, status: string, type: string) => void;
}) => {
  return (
    <Flex direction={"column"} gap={"6"} p={"6"}>
      <Heading className="bg-black text-white max-w-fit px-4 py-1 rounded-2xl">
        Strawhats
      </Heading>
      <Flex gap="5" wrap="wrap">
        {strawhats.map((strawhat) => (  // Changed variable name for clarity
          <CardComp
            key={strawhat.name} // Use strawhat instead of strawhats for clarity
            name={strawhat.name}
            image={strawhat.image}
            type="strawhat" // Changed to singular form for consistency
            handleChange={handleLikeChange}  // Pass handleLikeChange to update like/dislike status
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Strawhats;
