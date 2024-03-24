import { DisplayMode, EnvironmentType } from "@microsoft/sp-core-library";

export interface IHelloWorldReactProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  displayMode: DisplayMode;
  environment: EnvironmentType;
  siteTitle: string;
}
