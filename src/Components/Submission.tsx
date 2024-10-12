// src/Components/Submission.tsx

import { Heading, Flex } from "@radix-ui/themes";

const Submission = () => {
  return (
    <Flex direction="column" align="center" justify="center" className="h-screen bg-[#f1e8d4]">
      <Heading size="4" className="text-black">
        Your response has been submitted! Thank You for your valuable response!!
      </Heading>
    </Flex>
  );
};

export default Submission;
