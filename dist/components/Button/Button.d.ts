/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { IconName } from '../Icon';
import { ButtonColor, ButtonIconPosition, ButtonSize } from './enums';
import './Button.css';
export { ButtonColor, ButtonIconPosition, ButtonSize };
export interface BaseButtonProps extends BaseComponentProps {
    /**
     * Visible button text.
     */
    text: string;
    /**
     * Additional label that must be provided if the button text is not descriptive enough.
     */
    ariaLabel?: string;
    /**
     * Color describing the button's intent.
     * @default ButtonColor.PRIMARY
     */
    color?: ButtonColor;
    /**
     * Optional icon.
     */
    icon?: IconName;
    /**
     * Icon position.
     * @default ButtonIconPosition.LEFT
     */
    iconPosition?: ButtonIconPosition;
    /**
     * Button size.
     * @default ButtonSize.REGULAR
     */
    size?: ButtonSize;
    /**
     * Click callback handler.
     */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
    /**
     * Focus callback handler.
     */
    onFocus?: (event: React.FocusEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
    /**
     * Blur callback handler.
     */
    onBlur?: (event: React.FocusEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
    /**
     * Mouse enter callback handler.
     */
    onMouseEnter?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
    /**
     * Mouse leave callback handler.
     */
    onMouseLeave?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}
export interface RegularButtonProps extends BaseButtonProps {
    /**
     * Buttons cannot have a link.
     */
    href?: void;
    /**
     * Whether this button should be disabled or not.
     */
    disabled?: boolean;
}
export interface LinkButtonProps extends BaseButtonProps {
    /**
     * URL or a URL fragment that the link points to. If provided, the component will be rendered as a
     * link styled as a button.
     */
    href: string;
    /**
     * Links cannot be disabled.
     */
    disabled?: void;
}
export declare type ButtonProps = RegularButtonProps | LinkButtonProps;
/**
 * A `Button` allows a user to take an action.
 */
export default class Button extends React.PureComponent<ButtonProps, {}> {
    static propTypes: {
        href(props: LinkButtonProps, propName: string, componentName: string): Error | undefined;
    };
    static defaultProps: {
        color: ButtonColor;
        iconPosition: ButtonIconPosition;
        size: ButtonSize;
    };
    render(): JSX.Element;
    private getIconProps();
    private getClasses();
}
