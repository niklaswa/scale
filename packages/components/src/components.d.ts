/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { StyleSheet, } from "jss";
export namespace Components {
    interface ScaleAlert {
        /**
          * (optional) Alert class
         */
        "customClass"?: string;
        /**
          * (optional) Alert title
         */
        "headline": string;
        /**
          * (optional) Alert icon
         */
        "icon"?: string;
        /**
          * Alert method: open()
         */
        "open": () => Promise<void>;
        /**
          * (optional) Alert opened
         */
        "opened": boolean;
        /**
          * (optional) Alert size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Alert timeout
         */
        "timeout"?: boolean | number;
        /**
          * (optional) Alert variant
         */
        "variant"?: string;
    }
    interface ScaleBadge {
        /**
          * (optional) Badge class
         */
        "customClass"?: string;
        /**
          * (optional) Badge link
         */
        "link"?: string;
        /**
          * (optional) Badge pill
         */
        "pill"?: boolean;
        /**
          * (optional) Badge size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Badge variant
         */
        "variant"?: string;
    }
    interface ScaleButton {
        "ariaLabel"?: string;
        /**
          * (optional) Button class
         */
        "customClass"?: string;
        /**
          * Button method: disable()
         */
        "disable": () => Promise<void>;
        /**
          * (optional) Disabled button
         */
        "disabled"?: boolean;
        /**
          * Button method: enable()
         */
        "enable": () => Promise<void>;
        "focusable"?: boolean;
        /**
          * (optional) Link button
         */
        "href"?: string;
        /**
          * (optional) Icon only
         */
        "icon"?: string;
        /**
          * (optional) Icon after
         */
        "iconAfter"?: string;
        /**
          * (optional) Icon before
         */
        "iconBefore"?: string;
        /**
          * (optional) Icon only
         */
        "iconSize"?: number;
        "role"?: string;
        /**
          * (optional) Button size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Link target button
         */
        "target"?: string;
        /**
          * (optional) Button variant
         */
        "variant"?: string;
    }
    interface ScaleCard {
        /**
          * (optional) Card class
         */
        "customClass"?: string;
        /**
          * (optional) Link card
         */
        "href"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Link card target
         */
        "target"?: string;
    }
    interface ScaleCarousel {
        /**
          * (optional) Carousel class
         */
        "customClass"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) carousel display direction
         */
        "vertical"?: boolean;
    }
    interface ScaleDivider {
        /**
          * (optional) Divider class
         */
        "customClass"?: string;
        /**
          * (optional) Divider size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Divider vertical
         */
        "vertical"?: boolean;
    }
    interface ScaleIcon {
        /**
          * (optional) Tag class
         */
        "customClass"?: string;
        "height"?: number;
        /**
          * (optional) Tag theme
         */
        "name"?: string;
        "path": string;
        "size"?: number;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        "width"?: number;
    }
    interface ScaleInput {
        /**
          * (optional) Input text class
         */
        "customClass"?: string;
        /**
          * (optional) Input text error message
         */
        "errorMessage"?: string;
        /**
          * (optional) Input name
         */
        "name"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Input type
         */
        "type"?: "email" | "hidden" | "number" | "password" | "tel" | "text" | "url";
        /**
          * (optional) Input text value
         */
        "value"?: string;
    }
    interface ScaleInputError {
        /**
          * (optional) Input text class
         */
        "customClass"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleInputGroup {
        /**
          * (optional) Input text class
         */
        "customClass"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleInputLabel {
        /**
          * (optional) Input text class
         */
        "customClass"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleLink {
        /**
          * (optional) Block link
         */
        "block"?: boolean;
        /**
          * (optional) Link class
         */
        "customClass"?: string;
        /**
          * (optional) Disabled link
         */
        "disabled"?: boolean;
        /**
          * (optional) Link href
         */
        "href": string;
        /**
          * (optional) Icon only
         */
        "icon"?: string;
        /**
          * (optional) Icon size
         */
        "iconSize"?: number;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Link open a new tag
         */
        "target"?: string;
        /**
          * (optional) Link underline
         */
        "underline"?: boolean;
        /**
          * (optional) Link variant
         */
        "variant"?: string;
    }
    interface ScaleModal {
        /**
          * Modal method: onCloseModal()
         */
        "close": () => Promise<void>;
        /**
          * (optional) Modal class
         */
        "customClass"?: string;
        /**
          * Modal method: open()
         */
        "open": () => Promise<void>;
        /**
          * (required) Modal opened
         */
        "opened"?: boolean;
        /**
          * (optional) Modal size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Modal variant
         */
        "variant"?: string;
    }
    interface ScaleProgressBar {
        /**
          * (optional) Progress bar class
         */
        "customClass"?: string;
        /**
          * (required) Progress bar percentage
         */
        "percentage": number;
        /**
          * (optional) Progress bar percentage text
         */
        "showText"?: boolean;
        /**
          * (optional) Progress bar stroke width
         */
        "strokeWidth"?: number;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Progress text display inside bar
         */
        "textInside"?: boolean;
        /**
          * (optional) Progress bar variant
         */
        "variant"?: string;
    }
    interface ScaleSlider {
        /**
          * (optional) Slider class
         */
        "customClass"?: string;
        /**
          * (optional) Slider display value
         */
        "label": boolean;
        /**
          * (optional) Slider range max value
         */
        "max"?: number;
        /**
          * (optional) Slider range start value
         */
        "min"?: number;
        /**
          * (optional) Slider step
         */
        "step": number;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Slider binding value
         */
        "value": number;
    }
    interface ScaleSwitch {
        /**
          * (optional) Active switch
         */
        "active"?: boolean;
        /**
          * (optional) Switch class
         */
        "customClass"?: string;
        /**
          * (optional) Disabled switch
         */
        "disabled"?: boolean;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleTag {
        /**
          * (optional) Tag class
         */
        "customClass"?: string;
        /**
          * (optional) Tag on an <a> element
         */
        "link"?: string;
        /**
          * (optional) Tag pill
         */
        "pill"?: boolean;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Tag variant
         */
        "variant"?: string;
    }
    interface ScaleText {
        /**
          * (optional) Tag class
         */
        "customClass"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleToast {
        /**
          * (optional) Animated toast
         */
        "animated"?: boolean;
        /**
          * (optional) Toast autohide time
         */
        "autoHide"?: boolean | number;
        /**
          * (optional) Toast class
         */
        "customClass"?: string;
        /**
          * (optional) Toast fade duration
         */
        "fadeDuration"?: number;
        /**
          * Toast method: open()
         */
        "open": () => Promise<void>;
        /**
          * (optional) Toast opened
         */
        "opened"?: boolean;
        /**
          * (optional) Toast position right
         */
        "positionRight"?: number;
        /**
          * (optional) Toast position at the top
         */
        "positionTop"?: number;
        /**
          * (optional) Toast size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Toast time
         */
        "time"?: number;
        /**
          * (optional) Toast variant
         */
        "variant"?: string;
    }
}
declare global {
    interface HTMLScaleAlertElement extends Components.ScaleAlert, HTMLStencilElement {
    }
    var HTMLScaleAlertElement: {
        prototype: HTMLScaleAlertElement;
        new (): HTMLScaleAlertElement;
    };
    interface HTMLScaleBadgeElement extends Components.ScaleBadge, HTMLStencilElement {
    }
    var HTMLScaleBadgeElement: {
        prototype: HTMLScaleBadgeElement;
        new (): HTMLScaleBadgeElement;
    };
    interface HTMLScaleButtonElement extends Components.ScaleButton, HTMLStencilElement {
    }
    var HTMLScaleButtonElement: {
        prototype: HTMLScaleButtonElement;
        new (): HTMLScaleButtonElement;
    };
    interface HTMLScaleCardElement extends Components.ScaleCard, HTMLStencilElement {
    }
    var HTMLScaleCardElement: {
        prototype: HTMLScaleCardElement;
        new (): HTMLScaleCardElement;
    };
    interface HTMLScaleCarouselElement extends Components.ScaleCarousel, HTMLStencilElement {
    }
    var HTMLScaleCarouselElement: {
        prototype: HTMLScaleCarouselElement;
        new (): HTMLScaleCarouselElement;
    };
    interface HTMLScaleDividerElement extends Components.ScaleDivider, HTMLStencilElement {
    }
    var HTMLScaleDividerElement: {
        prototype: HTMLScaleDividerElement;
        new (): HTMLScaleDividerElement;
    };
    interface HTMLScaleIconElement extends Components.ScaleIcon, HTMLStencilElement {
    }
    var HTMLScaleIconElement: {
        prototype: HTMLScaleIconElement;
        new (): HTMLScaleIconElement;
    };
    interface HTMLScaleInputElement extends Components.ScaleInput, HTMLStencilElement {
    }
    var HTMLScaleInputElement: {
        prototype: HTMLScaleInputElement;
        new (): HTMLScaleInputElement;
    };
    interface HTMLScaleInputErrorElement extends Components.ScaleInputError, HTMLStencilElement {
    }
    var HTMLScaleInputErrorElement: {
        prototype: HTMLScaleInputErrorElement;
        new (): HTMLScaleInputErrorElement;
    };
    interface HTMLScaleInputGroupElement extends Components.ScaleInputGroup, HTMLStencilElement {
    }
    var HTMLScaleInputGroupElement: {
        prototype: HTMLScaleInputGroupElement;
        new (): HTMLScaleInputGroupElement;
    };
    interface HTMLScaleInputLabelElement extends Components.ScaleInputLabel, HTMLStencilElement {
    }
    var HTMLScaleInputLabelElement: {
        prototype: HTMLScaleInputLabelElement;
        new (): HTMLScaleInputLabelElement;
    };
    interface HTMLScaleLinkElement extends Components.ScaleLink, HTMLStencilElement {
    }
    var HTMLScaleLinkElement: {
        prototype: HTMLScaleLinkElement;
        new (): HTMLScaleLinkElement;
    };
    interface HTMLScaleModalElement extends Components.ScaleModal, HTMLStencilElement {
    }
    var HTMLScaleModalElement: {
        prototype: HTMLScaleModalElement;
        new (): HTMLScaleModalElement;
    };
    interface HTMLScaleProgressBarElement extends Components.ScaleProgressBar, HTMLStencilElement {
    }
    var HTMLScaleProgressBarElement: {
        prototype: HTMLScaleProgressBarElement;
        new (): HTMLScaleProgressBarElement;
    };
    interface HTMLScaleSliderElement extends Components.ScaleSlider, HTMLStencilElement {
    }
    var HTMLScaleSliderElement: {
        prototype: HTMLScaleSliderElement;
        new (): HTMLScaleSliderElement;
    };
    interface HTMLScaleSwitchElement extends Components.ScaleSwitch, HTMLStencilElement {
    }
    var HTMLScaleSwitchElement: {
        prototype: HTMLScaleSwitchElement;
        new (): HTMLScaleSwitchElement;
    };
    interface HTMLScaleTagElement extends Components.ScaleTag, HTMLStencilElement {
    }
    var HTMLScaleTagElement: {
        prototype: HTMLScaleTagElement;
        new (): HTMLScaleTagElement;
    };
    interface HTMLScaleTextElement extends Components.ScaleText, HTMLStencilElement {
    }
    var HTMLScaleTextElement: {
        prototype: HTMLScaleTextElement;
        new (): HTMLScaleTextElement;
    };
    interface HTMLScaleToastElement extends Components.ScaleToast, HTMLStencilElement {
    }
    var HTMLScaleToastElement: {
        prototype: HTMLScaleToastElement;
        new (): HTMLScaleToastElement;
    };
    interface HTMLElementTagNameMap {
        "scale-alert": HTMLScaleAlertElement;
        "scale-badge": HTMLScaleBadgeElement;
        "scale-button": HTMLScaleButtonElement;
        "scale-card": HTMLScaleCardElement;
        "scale-carousel": HTMLScaleCarouselElement;
        "scale-divider": HTMLScaleDividerElement;
        "scale-icon": HTMLScaleIconElement;
        "scale-input": HTMLScaleInputElement;
        "scale-input-error": HTMLScaleInputErrorElement;
        "scale-input-group": HTMLScaleInputGroupElement;
        "scale-input-label": HTMLScaleInputLabelElement;
        "scale-link": HTMLScaleLinkElement;
        "scale-modal": HTMLScaleModalElement;
        "scale-progress-bar": HTMLScaleProgressBarElement;
        "scale-slider": HTMLScaleSliderElement;
        "scale-switch": HTMLScaleSwitchElement;
        "scale-tag": HTMLScaleTagElement;
        "scale-text": HTMLScaleTextElement;
        "scale-toast": HTMLScaleToastElement;
    }
}
declare namespace LocalJSX {
    interface ScaleAlert {
        /**
          * (optional) Alert class
         */
        "customClass"?: string;
        /**
          * (optional) Alert title
         */
        "headline"?: string;
        /**
          * (optional) Alert icon
         */
        "icon"?: string;
        /**
          * (optional) Alert opened
         */
        "opened"?: boolean;
        /**
          * (optional) Alert size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Alert timeout
         */
        "timeout"?: boolean | number;
        /**
          * (optional) Alert variant
         */
        "variant"?: string;
    }
    interface ScaleBadge {
        /**
          * (optional) Badge class
         */
        "customClass"?: string;
        /**
          * (optional) Badge link
         */
        "link"?: string;
        /**
          * (optional) Badge pill
         */
        "pill"?: boolean;
        /**
          * (optional) Badge size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Badge variant
         */
        "variant"?: string;
    }
    interface ScaleButton {
        "ariaLabel"?: string;
        /**
          * (optional) Button class
         */
        "customClass"?: string;
        /**
          * (optional) Disabled button
         */
        "disabled"?: boolean;
        "focusable"?: boolean;
        /**
          * (optional) Link button
         */
        "href"?: string;
        /**
          * (optional) Icon only
         */
        "icon"?: string;
        /**
          * (optional) Icon after
         */
        "iconAfter"?: string;
        /**
          * (optional) Icon before
         */
        "iconBefore"?: string;
        /**
          * (optional) Icon only
         */
        "iconSize"?: number;
        "role"?: string;
        /**
          * (optional) Button size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Link target button
         */
        "target"?: string;
        /**
          * (optional) Button variant
         */
        "variant"?: string;
    }
    interface ScaleCard {
        /**
          * (optional) Card class
         */
        "customClass"?: string;
        /**
          * (optional) Link card
         */
        "href"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Link card target
         */
        "target"?: string;
    }
    interface ScaleCarousel {
        /**
          * (optional) Carousel class
         */
        "customClass"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) carousel display direction
         */
        "vertical"?: boolean;
    }
    interface ScaleDivider {
        /**
          * (optional) Divider class
         */
        "customClass"?: string;
        /**
          * (optional) Divider size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Divider vertical
         */
        "vertical"?: boolean;
    }
    interface ScaleIcon {
        /**
          * (optional) Tag class
         */
        "customClass"?: string;
        "height"?: number;
        /**
          * (optional) Tag theme
         */
        "name"?: string;
        "path"?: string;
        "size"?: number;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        "width"?: number;
    }
    interface ScaleInput {
        /**
          * (optional) Input text class
         */
        "customClass"?: string;
        /**
          * (optional) Input text error message
         */
        "errorMessage"?: string;
        /**
          * (optional) Input name
         */
        "name"?: string;
        /**
          * (optional) Input text event changed
         */
        "onChanged"?: (event: CustomEvent<string>) => void;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Input type
         */
        "type"?: "email" | "hidden" | "number" | "password" | "tel" | "text" | "url";
        /**
          * (optional) Input text value
         */
        "value"?: string;
    }
    interface ScaleInputError {
        /**
          * (optional) Input text class
         */
        "customClass"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleInputGroup {
        /**
          * (optional) Input text class
         */
        "customClass"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleInputLabel {
        /**
          * (optional) Input text class
         */
        "customClass"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleLink {
        /**
          * (optional) Block link
         */
        "block"?: boolean;
        /**
          * (optional) Link class
         */
        "customClass"?: string;
        /**
          * (optional) Disabled link
         */
        "disabled"?: boolean;
        /**
          * (optional) Link href
         */
        "href"?: string;
        /**
          * (optional) Icon only
         */
        "icon"?: string;
        /**
          * (optional) Icon size
         */
        "iconSize"?: number;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Link open a new tag
         */
        "target"?: string;
        /**
          * (optional) Link underline
         */
        "underline"?: boolean;
        /**
          * (optional) Link variant
         */
        "variant"?: string;
    }
    interface ScaleModal {
        /**
          * (optional) Modal class
         */
        "customClass"?: string;
        /**
          * (required) Modal opened
         */
        "opened"?: boolean;
        /**
          * (optional) Modal size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Modal variant
         */
        "variant"?: string;
    }
    interface ScaleProgressBar {
        /**
          * (optional) Progress bar class
         */
        "customClass"?: string;
        /**
          * (required) Progress bar percentage
         */
        "percentage"?: number;
        /**
          * (optional) Progress bar percentage text
         */
        "showText"?: boolean;
        /**
          * (optional) Progress bar stroke width
         */
        "strokeWidth"?: number;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Progress text display inside bar
         */
        "textInside"?: boolean;
        /**
          * (optional) Progress bar variant
         */
        "variant"?: string;
    }
    interface ScaleSlider {
        /**
          * (optional) Slider class
         */
        "customClass"?: string;
        /**
          * (optional) Slider display value
         */
        "label"?: boolean;
        /**
          * (optional) Slider range max value
         */
        "max"?: number;
        /**
          * (optional) Slider range start value
         */
        "min"?: number;
        /**
          * (optional) Slider step
         */
        "step"?: number;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Slider binding value
         */
        "value"?: number;
    }
    interface ScaleSwitch {
        /**
          * (optional) Active switch
         */
        "active"?: boolean;
        /**
          * (optional) Switch class
         */
        "customClass"?: string;
        /**
          * (optional) Disabled switch
         */
        "disabled"?: boolean;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleTag {
        /**
          * (optional) Tag class
         */
        "customClass"?: string;
        /**
          * (optional) Tag on an <a> element
         */
        "link"?: string;
        /**
          * (optional) Tag pill
         */
        "pill"?: boolean;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Tag variant
         */
        "variant"?: string;
    }
    interface ScaleText {
        /**
          * (optional) Tag class
         */
        "customClass"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
    }
    interface ScaleToast {
        /**
          * (optional) Animated toast
         */
        "animated"?: boolean;
        /**
          * (optional) Toast autohide time
         */
        "autoHide"?: boolean | number;
        /**
          * (optional) Toast class
         */
        "customClass"?: string;
        /**
          * (optional) Toast fade duration
         */
        "fadeDuration"?: number;
        /**
          * (optional) Toast opened
         */
        "opened"?: boolean;
        /**
          * (optional) Toast position right
         */
        "positionRight"?: number;
        /**
          * (optional) Toast position at the top
         */
        "positionTop"?: number;
        /**
          * (optional) Toast size
         */
        "size"?: string;
        /**
          * (optional) Injected jss styles
         */
        "styles"?: StyleSheet;
        /**
          * (optional) Toast time
         */
        "time"?: number;
        /**
          * (optional) Toast variant
         */
        "variant"?: string;
    }
    interface IntrinsicElements {
        "scale-alert": ScaleAlert;
        "scale-badge": ScaleBadge;
        "scale-button": ScaleButton;
        "scale-card": ScaleCard;
        "scale-carousel": ScaleCarousel;
        "scale-divider": ScaleDivider;
        "scale-icon": ScaleIcon;
        "scale-input": ScaleInput;
        "scale-input-error": ScaleInputError;
        "scale-input-group": ScaleInputGroup;
        "scale-input-label": ScaleInputLabel;
        "scale-link": ScaleLink;
        "scale-modal": ScaleModal;
        "scale-progress-bar": ScaleProgressBar;
        "scale-slider": ScaleSlider;
        "scale-switch": ScaleSwitch;
        "scale-tag": ScaleTag;
        "scale-text": ScaleText;
        "scale-toast": ScaleToast;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "scale-alert": LocalJSX.ScaleAlert & JSXBase.HTMLAttributes<HTMLScaleAlertElement>;
            "scale-badge": LocalJSX.ScaleBadge & JSXBase.HTMLAttributes<HTMLScaleBadgeElement>;
            "scale-button": LocalJSX.ScaleButton & JSXBase.HTMLAttributes<HTMLScaleButtonElement>;
            "scale-card": LocalJSX.ScaleCard & JSXBase.HTMLAttributes<HTMLScaleCardElement>;
            "scale-carousel": LocalJSX.ScaleCarousel & JSXBase.HTMLAttributes<HTMLScaleCarouselElement>;
            "scale-divider": LocalJSX.ScaleDivider & JSXBase.HTMLAttributes<HTMLScaleDividerElement>;
            "scale-icon": LocalJSX.ScaleIcon & JSXBase.HTMLAttributes<HTMLScaleIconElement>;
            "scale-input": LocalJSX.ScaleInput & JSXBase.HTMLAttributes<HTMLScaleInputElement>;
            "scale-input-error": LocalJSX.ScaleInputError & JSXBase.HTMLAttributes<HTMLScaleInputErrorElement>;
            "scale-input-group": LocalJSX.ScaleInputGroup & JSXBase.HTMLAttributes<HTMLScaleInputGroupElement>;
            "scale-input-label": LocalJSX.ScaleInputLabel & JSXBase.HTMLAttributes<HTMLScaleInputLabelElement>;
            "scale-link": LocalJSX.ScaleLink & JSXBase.HTMLAttributes<HTMLScaleLinkElement>;
            "scale-modal": LocalJSX.ScaleModal & JSXBase.HTMLAttributes<HTMLScaleModalElement>;
            "scale-progress-bar": LocalJSX.ScaleProgressBar & JSXBase.HTMLAttributes<HTMLScaleProgressBarElement>;
            "scale-slider": LocalJSX.ScaleSlider & JSXBase.HTMLAttributes<HTMLScaleSliderElement>;
            "scale-switch": LocalJSX.ScaleSwitch & JSXBase.HTMLAttributes<HTMLScaleSwitchElement>;
            "scale-tag": LocalJSX.ScaleTag & JSXBase.HTMLAttributes<HTMLScaleTagElement>;
            "scale-text": LocalJSX.ScaleText & JSXBase.HTMLAttributes<HTMLScaleTextElement>;
            "scale-toast": LocalJSX.ScaleToast & JSXBase.HTMLAttributes<HTMLScaleToastElement>;
        }
    }
}
