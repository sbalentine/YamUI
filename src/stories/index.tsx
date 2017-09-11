/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { addDecorator, StoryDecorator } from '@storybook/react';
import '../../dist/yamui-base.css';

// Pad each story so we can visually diff the body without collapsed component margins
const PaddingDecorator: StoryDecorator = (story: Function) => (
  <div style={{ padding: '10px' }}>
    {story()}
  </div>
);

addDecorator(PaddingDecorator);

// Import component stories
import './Block';
import './Text';
import './Button';
import './Clickable';
import './NavigationLink';
import './FakeLink';
import './Icon';
import './Avatar';
import './MediaObject';
import './Callout';
import './ScreenreaderText';
import './FixedGrid';
import './HorizontalList';

// Import other non-component documentation and demos
import './hovercard';
