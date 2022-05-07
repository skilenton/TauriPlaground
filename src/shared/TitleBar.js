import { Stack, IconButton, Paper, Tooltip } from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  Close,
  Maximize,
  Minimize,
} from "@mui/icons-material";
import { appWindow } from "@tauri-apps/api/window";

export const TitleBar = () => {
  const buttons = [
    {
      name: "Minimize",
      icon: <Minimize />,
      action: () => {
        appWindow.minimize();
      },
    },
    {
      name: "Maximize",
      icon: <Maximize />,
      action: () => {
        appWindow.toggleMaximize();
      },
    },
    {
      name: "Close",
      icon: <Close />,
      action: () => {
        appWindow.close();
      },
    },
  ];

  const historyButtons = [
    {
      name: "Back",
      icon: <ChevronLeft />,
      action: () => {
        alert("<-");
      },
    },
    {
      name: "Forward",
      icon: <ChevronRight />,
      action: () => {
        alert("->");
      },
    },
  ];

  return (
    <Paper variant="outlined">
      <Stack
        data-tauri-drag-region
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          {historyButtons.map((button) => {
            return (
              <Tooltip title={button.name}>
                <IconButton onClick={button.action}>{button.icon}</IconButton>
              </Tooltip>
            );
          })}
        </Stack>
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          {buttons.map((button) => (
            <Tooltip title={button.name}>
              <IconButton onClick={button.action}>{button.icon}</IconButton>
            </Tooltip>
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
};
