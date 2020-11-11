// necessary because, CustomLink applies Link formatting which looks poorly on buttons
// also, button formatting is not centered when using CustomLink

import React from 'react';
// ReactRouter Link
import { Link as RouterLink } from 'react-router-dom';
// Prop Type checking
import PropTypes from 'prop-types';
// Material UI components
import { Button, Typography } from '@material-ui/core';

export default function ButtonAndIconLink(props) {
  const { ariaLabel, icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <Button 
      aria-label={ariaLabel}
      color="inherit"
      component={renderLink}
    >
      <Typography variant="button" display="block" gutterBottom>
        {primary}
      </Typography>
      {icon ? <>{icon}</> : null}
    </Button>
  );
}

ButtonAndIconLink.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};