/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconWode: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 563.2c-127.9744 0-230.4-115.2512-230.4-256s102.4256-256 230.4-256 230.4 115.2512 230.4 256-102.4256 256-230.4 256z m0-51.2c98.2528 0 179.2-91.0592 179.2-204.8s-80.9472-204.8-179.2-204.8-179.2 91.0592-179.2 204.8 80.9472 204.8 179.2 204.8zM128 793.6a179.2 179.2 0 0 1 179.3792-179.2h409.2416C815.6416 614.4 896 694.7328 896 793.6a179.2 179.2 0 0 1-179.3792 179.2H307.3792C208.3584 972.8 128 892.4672 128 793.6z m51.2 0c0 70.5792 57.4464 128 128.1792 128h409.2416A128 128 0 0 0 844.8 793.6c0-70.5792-57.4464-128-128.1792-128H307.3792A128 128 0 0 0 179.2 793.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconWode.defaultProps = {
  size: 18,
};

IconWode = React.memo ? React.memo(IconWode) : IconWode;

export default IconWode;
