// Copyright 2020 Prescryptive Health, Inc.

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { BaseInput } from './base-input';
import { ContainerCard } from '@phx/components/src/container-card/container-card';
import { AppHeader } from '@phx/components/src/app-header/app-header';
import { ScreenContainer } from '@phx/components/src/screen-container/screen-container';
import { BaseText } from '../../text/base-text/base-text';
import { UserContextProvider } from '@phx/core/src/providers/user/user.context-provider';
import { action } from '@storybook/addon-actions';

const backButtonPress = () => action('backButton');

const userInfo = {
  firstName: 'Juan',
  lastName: 'Perez',
  memberId: 'P776655443301',
};

const TestComponentA: React.FC = () => {
  const [text] = useState('');
  return (
    <UserContextProvider currentUser={userInfo}>
      <ScreenContainer>
        <AppHeader onBackButtonPress={backButtonPress} />
        <ContainerCard>
          <BaseText text='Accepts only numbers' />
          <BaseInput
            placeholder={'(000) 000 0000'}
            value={text}
            onChangeText={action('BaseInput')}
            keyboardType='numeric'
          />
        </ContainerCard>
      </ScreenContainer>
    </UserContextProvider>
  );
};

const TestComponentB: React.FC = () => {
  const [text, changeText] = useState('');
  const [valid, setInvalid] = useState('');
  const handleTextChange = (inputText: string) => {
    changeText(inputText);
    if (inputText === 'error') {
      setInvalid("The word 'error' triggers an input error");
    } else {
      setInvalid('');
    }
  };
  return (
    <UserContextProvider currentUser={userInfo}>
      <ScreenContainer>
        <AppHeader onBackButtonPress={backButtonPress} />
        <ContainerCard>
          <BaseText text="Type 'error' to get invalid input" />
          <BaseInput
            placeholder={'(000) 000 0000'}
            value={text}
            onChangeText={handleTextChange}
            errorMessage={valid}
          />
        </ContainerCard>
      </ScreenContainer>
    </UserContextProvider>
  );
};

storiesOf('Input text', module)
  .add('Placeholder', () => <TestComponentA />)
  .add('Invalid State', () => <TestComponentB />);
