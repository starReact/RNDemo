/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconHuanyipi from './IconHuanyipi';
import IconLike from './IconLike';
import IconMore from './IconMore';
import IconWode from './IconWode';
import IconFaxian from './IconFaxian';
import IconListen from './IconListen';
import IconShouye from './IconShouye';
export { default as IconHuanyipi } from './IconHuanyipi';
export { default as IconLike } from './IconLike';
export { default as IconMore } from './IconMore';
export { default as IconWode } from './IconWode';
export { default as IconFaxian } from './IconFaxian';
export { default as IconListen } from './IconListen';
export { default as IconShouye } from './IconShouye';

export type IconNames = 'icon-huanyipi' | 'icon-like' | 'icon-more' | 'icon-wode' | 'icon-faxian' | 'icon-listen' | 'icon-shouye';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-huanyipi':
      return <IconHuanyipi key="1" {...rest} />;
    case 'icon-like':
      return <IconLike key="2" {...rest} />;
    case 'icon-more':
      return <IconMore key="3" {...rest} />;
    case 'icon-wode':
      return <IconWode key="4" {...rest} />;
    case 'icon-faxian':
      return <IconFaxian key="5" {...rest} />;
    case 'icon-listen':
      return <IconListen key="6" {...rest} />;
    case 'icon-shouye':
      return <IconShouye key="7" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
