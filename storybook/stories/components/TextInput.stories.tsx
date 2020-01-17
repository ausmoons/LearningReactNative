import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { TextInput } from '../../../src/components';

storiesOf('TextInput', module)
    .add('empty', () => <TextInput placeholder={'Name'} isValid />)
    .add('valid', () => <TextInput placeholder={'Name'} value={'Sandris'} isValid />)
    .add('error', () => <TextInput placeholder={'Name'} value={'Sandris'} isValid={false} />);
