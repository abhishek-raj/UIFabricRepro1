import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className={ styles.helloWorld }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
              <DefaultButton primary>Test 1</DefaultButton>
              <DefaultButton>Test 3</DefaultButton>
              <PrimaryButton>Test 2</PrimaryButton>
              <PrimaryButton 
                menuProps={{
                  shouldFocusOnMount: true,
                  items: [
                    {
                      key: 'MenuItem1',
                      name: 'Menu Item 1'
                    },
                    {
                      key: 'MenuItem1',
                      name: 'Menu Item 1'
                    },
                  ]
                }}
              >Menu Button 2</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
