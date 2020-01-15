import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { SearchToolbar } from '../../../src/components';

storiesOf('SearchToolbar', module).add('default', () => <SearchToolbar title={'Categories'} />);
