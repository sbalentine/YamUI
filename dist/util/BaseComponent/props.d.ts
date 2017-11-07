/// <reference types="react" />
export interface BaseComponentProps {
    /**
     * One or more class names to be added to the root element of this component, i.e.
     * `"class-one class-two"`.
     */
    className?: string;
}
export interface NestableBaseComponentProps extends BaseComponentProps {
    /**
     * Elements to be rendered as children of this component.
     */
    children?: React.ReactNode;
}
