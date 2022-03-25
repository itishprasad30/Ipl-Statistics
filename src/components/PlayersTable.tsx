import React from "react";
import Link from "next/link";
import { Box, Code, IconButton, Switch, Text } from "@chakra-ui/react";
import { Table, Tr, Th, Td } from "@/components/Table";
import { PlayersData } from "@/types/teams";

const PlayersTable = ({ playerdetails }: { playerdetails: PlayersData[] }) => {
  return (
    <Table mb={20} mt={40} w={600}>
      <thead>
        <Tr>
          <Th w="400px">Name</Th>
          <Th>Details</Th>
        </Tr>
      </thead>
      <tbody>
        {playerdetails.map((playerDetail) => (
          <Box as="tr" key={playerDetail?.Player_Name}>
            <Td fontWeight="medium">{playerDetail?.Player_Name}</Td>
            <Td>
              <Link href={`/player/${playerDetail?.Player_Name}`}>
                <a>View Details</a>
              </Link>
            </Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default PlayersTable;
