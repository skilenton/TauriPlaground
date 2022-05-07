import { appWindow } from "@tauri-apps/api/window";

export const Config = () => {
  appWindow.setDecorations(false);
};
