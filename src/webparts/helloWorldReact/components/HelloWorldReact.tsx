import * as React from 'react';
import styles from './HelloWorldReact.module.scss';
import type { IHelloWorldReactProps } from './IHelloWorldReactProps';
import { DisplayMode, EnvironmentType } from '@microsoft/sp-core-library';

const HelloWorldReact: React.FunctionComponent<IHelloWorldReactProps> = (props) => {
  const {
    description,
    isDarkTheme,
    environmentMessage,
    hasTeamsContext,
    userDisplayName,
    displayMode,
    environment,
    siteTitle
  } = props;

  const pageMode: string = (displayMode === DisplayMode.Edit)
    ? 'You are in edit mode'
    : 'You are in read mode';
  const environmentType: string = (environment === EnvironmentType.ClassicSharePoint)
    ? 'You are running in a classic page'
    : 'You are running in a modern page';

  return (
    <section className={`${styles.helloWorldReact} ${hasTeamsContext ? styles.teams : ''}`}>
      <div className={styles.welcome}>
        <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
        <h2>Well done, {userDisplayName}!</h2>
        <div>{environmentMessage}</div>
        <div>Web part property value: <strong>{description}</strong></div>
        <div>Site title: <strong>{siteTitle}</strong></div>
        <div>Page mode: <strong>{pageMode}</strong></div>
        <div>Environment: <strong>{environmentType}</strong></div>
      </div>
      <div>
        <h3>Welcome to SharePoint Framework!</h3>
        <p>
          The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It&#39;s the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling.
        </p>
        <h4>Learn more about SPFx development:</h4>
        <ul className={styles.links}>
          <li><a href="https://aka.ms/spfx" target="_blank" rel="noreferrer">SharePoint Framework Overview</a></li>
          <li><a href="https://aka.ms/spfx-yeoman-graph" target="_blank" rel="noreferrer">Use Microsoft Graph in your solution</a></li>
          <li><a href="https://aka.ms/spfx-yeoman-teams" target="_blank" rel="noreferrer">Build for Microsoft Teams using SharePoint Framework</a></li>
          <li><a href="https://aka.ms/spfx-yeoman-viva" target="_blank" rel="noreferrer">Build for Microsoft Viva Connections using SharePoint Framework</a></li>
          <li><a href="https://aka.ms/spfx-yeoman-store" target="_blank" rel="noreferrer">Publish SharePoint Framework applications to the marketplace</a></li>
          <li><a href="https://aka.ms/spfx-yeoman-api" target="_blank" rel="noreferrer">SharePoint Framework API reference</a></li>
          <li><a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">Microsoft 365 Developer Community</a></li>
        </ul>
      </div>
    </section>
  );
};

export default HelloWorldReact;
