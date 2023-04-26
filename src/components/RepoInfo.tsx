import { Box, Typography } from "@mui/material";

interface IRepoInfoProps {
  owner: string;
  repo: string;
  stars: number;
}

const RepoInfo = ({ owner, repo, stars }: IRepoInfoProps) => {
  return (
    <Box display="flex" alignItems="center">
      <Box mr={1}>
        <Typography variant="h6">{owner}</Typography>
      </Box>
      <Box mr={1}>
        <Typography variant="h6">{">"}</Typography>
      </Box>
      <Box mr={1}>
        <Typography variant="h6">{repo}</Typography>
      </Box>
      <Box>
        <Typography variant="h6">{`*${stars} stars`}</Typography>
      </Box>
    </Box>
  );
};

export default RepoInfo;
