import './Card.css';

// PROPS.CHILDREN
//A custom component that is meant to be used as a wrapper for other components, or the root element of a component, requires the following configuration:
//1.  The custom component must have a className property.
//2.  The custom component must have a props.children property.
//props.children is a reserved property name that React recognizes.  It is used to access the content between the opening and closing tags of a custom component.
//In this case, the content between the opening and closing tags of the Card component is the ExpenseItem component.
//The ExpenseItem component is the child of the Card component.

// CLASSNAME PROPERTY ON CUSTOM COMPONENTS
//Custom components only support what you explicitly configure them to support.
//If you want to make sure that the className can be set and have an effect, you need to configure the custom component to support the className property.

function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;