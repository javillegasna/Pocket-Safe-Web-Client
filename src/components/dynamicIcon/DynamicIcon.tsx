import React from 'react';
import { IconType } from 'react-icons';
import * as FontAwesome from 'react-icons/fa';
import { IDynamicIcon } from './DynamicIcon.infaces';

const DynamicIcon = ({ iconName = '', message = '' }: IDynamicIcon) => {
  const fontAwesomeKey = iconName ? iconName : 'FaExclamationCircle';
  const iconSVG = FontAwesome[fontAwesomeKey as keyof typeof FontAwesome] as IconType;
  const icon = React.createElement(iconSVG);
  return (
    <>
      <i className="me-2">{icon}</i>
      {message && <span>{message}</span>}
    </>
  );
};
export default DynamicIcon;
