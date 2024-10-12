import { Button, Flex, Table } from "@radix-ui/themes";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Admirals from "../Components/Admirals";
import Strawhats from "../Components/Strawhats";
import Yonkos from "../Components/Yonkos";
import { admirals, strawhats, yonkos } from "../utils/consts";

const Home = () => {
  const [bill, setBill] = useState({
    admirals: admirals.map((admiral) => ({ ...admiral, status: "neutral" })),
    yonkos: yonkos.map((yon) => ({ ...yon, status: "neutral" })),
    strawhats: strawhats.map((strawhat) => ({ ...strawhat, status: "neutral" })),
  });

  const [likes, setLikes] = useState({
    admiralsLikes: 0,
    admiralsDislikes: 0,
    yonLikes: 0,
    yonDislikes: 0,
    strawhatsLikes: 0,
    strawhatsDislikes: 0,
  });

  const calculateLikesAndDislikes = (updatedBill: { admirals: any; yonkos: any; strawhats: any; }) => {
    const admLikes = updatedBill.admirals.filter((item: { status: string; }) => item.status === "like").length;
    const admDislikes = updatedBill.admirals.filter((item: { status: string; }) => item.status === "dislike").length;
    const yonLikesCount = updatedBill.yonkos.filter((item: { status: string; }) => item.status === "like").length;
    const yonDislikesCount = updatedBill.yonkos.filter((item: { status: string; }) => item.status === "dislike").length;
    const strawLikes = updatedBill.strawhats.filter((item: { status: string; }) => item.status === "like").length;
    const strawDislikes = updatedBill.strawhats.filter((item: { status: string; }) => item.status === "dislike").length;

    setLikes({
      admiralsLikes: admLikes,
      admiralsDislikes: admDislikes,
      yonLikes: yonLikesCount,
      yonDislikes: yonDislikesCount,
      strawhatsLikes: strawLikes,
      strawhatsDislikes: strawDislikes,
    });
  };

  const handleLikeChange = (name: string, status: any, type: string) => {
    const updatedBill = { ...bill };

    if (type === "admiral") {
      updatedBill.admirals = bill.admirals.map((admiral) =>
        admiral.name === name ? { ...admiral, status } : admiral
      );
    } else if (type === "yonko") {
      updatedBill.yonkos = bill.yonkos.map((yon) =>
        yon.name === name ? { ...yon, status } : yon
      );
    } else if (type === "strawhat") {
      updatedBill.strawhats = bill.strawhats.map((strawhat) =>
        strawhat.name === name ? { ...strawhat, status } : strawhat
      );
    }

    setBill(updatedBill);
    calculateLikesAndDislikes(updatedBill);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (isFormValid()) {
      navigate("/submission");
    }
  };

  // Validation function to check if all characters are rated
  const isFormValid = () => {
    const allAdmiralsRated = bill.admirals.every((admiral) => admiral.status !== "neutral");
    const allYonkosRated = bill.yonkos.every((yonko) => yonko.status !== "neutral");
    const allStrawhatsRated = bill.strawhats.every((strawhat) => strawhat.status !== "neutral");
    return allAdmiralsRated && allYonkosRated && allStrawhatsRated;
  };

  return (
    <div className="home-page-container">
      <div className="background-container ">
        {/* Main Content */}
        <div className="main-content">
          {/* Admirals Component */}
          <div className="flex flex-col gap-4 items-center bg-orange-600">
            <Admirals handleLikeChange={handleLikeChange} />
          </div>

          {/* Yonkos Component */}
          <div className="flex items-center justify-center w-full bg-orange-600">
            <Yonkos handleLikeChange={handleLikeChange} />
          </div>

          {/* Strawhats Component */}
          <Flex direction="column" align="center" gap="4" className="bg-orange-600">
            <Strawhats handleLikeChange={handleLikeChange} />
          </Flex>

          {/* Display Table of Likes and Dislikes */}
          <Table.Root>
            <Table.Header>
              <Table.ColumnHeaderCell>Category</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Likes</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Dislikes</Table.ColumnHeaderCell>
            </Table.Header>
            <Table.Row>
              <Table.Cell>Admirals</Table.Cell>
              <Table.Cell>{likes.admiralsLikes}</Table.Cell>
              <Table.Cell>{likes.admiralsDislikes}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Yonkos</Table.Cell>
              <Table.Cell>{likes.yonLikes}</Table.Cell>
              <Table.Cell>{likes.yonDislikes}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Strawhats</Table.Cell>
              <Table.Cell>{likes.strawhatsLikes}</Table.Cell>
              <Table.Cell>{likes.strawhatsDislikes}</Table.Cell>
            </Table.Row>
          </Table.Root>

          {/* Submit Button */}
          <Flex justify="center" p="4">
            <Button
              className={`bg-black text-white hover:bg-orange-600 transition-colors duration-300 rounded-full ${isFormValid() ? '' : 'opacity-50 cursor-not-allowed'}`}
              onClick={handleSubmit}
              disabled={!isFormValid()} // Disable button if form is not valid
            >
              Submit Response
            </Button>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Home;
