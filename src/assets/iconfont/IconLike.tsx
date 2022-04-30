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

let IconLike: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0C229.216 0 0 229.216 0 512c0 282.768 229.216 512 512 512 282.752 0 512-229.232 512-512C1024 229.216 794.752 0 512 0zM512 992C246.896 992 32 777.088 32 512 32 246.896 246.896 32 512 32c265.056 0 480 214.896 480 480C992 777.088 777.056 992 512 992z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M648 273.952c-54.8 0-103.712 25.04-136 64.304-32.288-39.248-81.216-64.304-136-64.304-97.2 0-176 78.8-176 176 0 55.664 25.936 105.248 66.288 137.488l-0.128 0.032 245.216 194.592 246.464-194.592-0.128-0.032c40.352-32.256 66.288-81.824 66.288-137.488C824 352.736 745.2 273.952 648 273.952zM733.152 565.872l0.176 0.064-221.952 176-220.72-176 0.176-0.064c-35.632-26.224-58.848-68.304-58.848-115.936 0-79.536 64.464-144 144-144 63.056 0 116.496 40.592 136 97.008 19.504-56.416 72.96-97.008 136-97.008 79.536 0 144 64.464 144 144C792 497.568 768.784 539.664 733.152 565.872z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconLike.defaultProps = {
  size: 18,
};

IconLike = React.memo ? React.memo(IconLike) : IconLike;

export default IconLike;
