import React from 'react';
// ReactRouter Link
import { Link as RouterLink } from 'react-router-dom';
// Prop Type checking
import PropTypes from 'prop-types';
// Material UI components
import { Button } from '@material-ui/core';

export default function CustomLink(props) {
  const { ariaLabel, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <Button 
      aria-label={ariaLabel}
      component={renderLink}
    >
      {props.children}
    </Button>
  );
}

CustomLink.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};