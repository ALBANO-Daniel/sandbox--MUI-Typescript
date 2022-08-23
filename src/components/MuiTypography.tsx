import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsa
        asperiores corporis illum. Quia minus libero, accusamus autem itaque
        esse architecto enim soluta nemo a debitis! Accusamus magni perferendis
        consectetur?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vitae
        perspiciatis cupiditate laudantium mollitia dolor magni, quisquam quod
        nobis tempore voluptates. Sapiente architecto recusandae, corporis
        minima modi veritatis aliquam obcaecati.
      </Typography>
    </div>
  );
};
// I CAN ADD   < component="h1" > in a typography tag of variant h4 , and it will be a h1 HTML component in the brownser!
// gutterBottom default=false   bottom margin(proporcional to the component size)