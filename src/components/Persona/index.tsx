/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { Enum } from 'typescript-string-enums';
import classNames = require('classnames');
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './persona.css';

export const PersonaSize = Enum({
  LARGE: 'large',
  REGULAR: 'regular',
  SMALL: 'small',
  XSMALL: 'extraSmall',
  XXSMALL: 'extraExtraSmall',
});
export type PersonaSize = Enum<typeof PersonaSize>;

export interface PersonaProps extends NestableBaseComponentProps {}

const Persona: React.StatelessComponent<PersonaProps> = (props) => {
  return (
    <span className={classNames('y-persona', props.className)}>
      {props.children}
    </span>
  );
};
export default Persona;
