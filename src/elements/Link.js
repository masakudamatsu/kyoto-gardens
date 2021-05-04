import styled from 'styled-components';
import PropTypes from 'prop-types';

import {cssLinkText} from 'src/utils/cssLinkText';
import {color} from 'src/utils/specColor';
import {ryoanji} from 'src/utils/designSpec';

const Link = styled.a`
  ${cssLinkText({
    backgroundColor: color.article.background,
    backgroundColorOnHover: color.linkText.background.onHover,
    linkTextColor: 'inherit',
    fontMetrics: ryoanji.paragraph.mobile.fontMetrics,
  })}
`;

Link.propTypes = {};
export default Link;
