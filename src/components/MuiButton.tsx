import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

export const MuiButton = () => {
  // useState to acomodate formats: the value props of ToggleButtonGroup component(line:102)...
  // ...onChange of this props it calls the 'handleFormatChange' function that create 'updatedFormats' prop to sent to setFormats useState.
  const [formats, setFormats] = useState<string | null>(null);
  console.log({
    formats,
  });
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
    // assign formats value to updatedFormats value
  ) => {
    setFormats(updatedFormats);
    // assign updatedFormats to formats const with useState
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          {/* if you add href=" " to button variant='text' , the button tag becomes a ancor(a tag) in the brownser... */}
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        {/* the more EXPRESIVE option */}
        <Button variant="outlined">Outlined</Button>
        {/* the no bg option */}
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Sucess
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        {/* SIZE tryout SECTION:  you have to put display block, as default is flex(that affects the size of the button) */}
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      {/* next Stack is tryout of importing fancy icons from subLIBRARY(icons-material) */}
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple // this is the wave effect when you click
          onClick={() => alert("Clicked")}
        >
          {/* startICon prop === Icon BEFORE text INSIDE button, endIcon === puts icon AFTER the text, in END of the box */}
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          {/* disableElevation is some shadow box propreties */}
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          {/* IconButton component IS less pronouced then Button, good for navBars or small components,
           and SendIcon can be changed to others icons in icons-material LIB  */}
          <SendIcon />
        </IconButton>
      </Stack>
      {/* Next Stack have the example of a "major" button with sub buttons  */}
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          {/* you can use same variants in ButtonGroup as in Button */}
          <Button onClick={() => alert("Left clicked!")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      {/* Next Stack have the ToggleButton&group tryout, with some Hooks to function,
      Functions in (line:18) */}
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formating"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="success"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
