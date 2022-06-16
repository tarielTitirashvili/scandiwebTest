import styled, { css } from 'styled-components';
import { Text } from '../text';

const Title = styled.h1`
margin: ${props=>props.margin || '28px 16px 32px 16px'}; 
font-size: ${props=> props.size || '1rem'};
line-height: ${props=>props.lineHeight||'120%'};
font-weight: ${props=>props.weight || props.theme.fontWeight.text};
font-family: ${props=>props.fontFamily|| '\'Raleway\', sans-serif'};
cursor: ${props=> props.cursor || 'pointer'};
color: ${props=>props.color || props.theme.colors.text};
${props =>props.selected && css`
  color: ${props=>props.selectedColor || props.theme.colors.primary};
  font-weight: ${props=>props.weight || props.theme.fontWeight.selectedNavTitle};
  margin-bottom: 30px
`
}
${props =>props.navTitle && css`
  color: ${props=>props.navTitleColor || props.theme.colors.text};
  font-weight: ${props=>props.weight || props.theme.fontWeight.navTitle};
`
}
`; 

export const SmallTitle = styled.h3`
margin: ${props=>props.margin || '28px 16px 32px 16px'}; 
font-size: ${props=> props.size || '1rem'};
line-height: ${props=>props.lineHeight||'120%'};
font-weight: ${props=>props.weight || props.theme.fontWeight.text};
cursor: ${props=> props.cursor || 'pointer'};
color: ${props=>props.color || props.theme.colors.text};
${props =>props.productInfoTitle && css`
margin: 0 0 43px 0;
font-size: 1.875rem;
line-height: 27px;
cursor: auto;
`
}
`;

export const CartSummaryNumTitle = styled(Text)`
cursor: text;
font-weight: 700;
margin: 0 0 0 8px;
${props =>props.quantity && css`
  margin: 0 0 0 4px;
`
}
${props =>props.total && css`
  margin: 0 0 0 28px;
`
}
${props =>props.dropdown && css`
  margin: 0;
`
}
`

export const ProductBrandTitle = styled(SmallTitle)`
font-weight: 600;
font-size: 1.875rem;
line-height:  27px;
margin: 0 0 16px 0;
cursor: pointer;
${props =>props.nameTitle && css`
font-weight: 400;
margin: 0 0 20px 0;
`
}
${props =>props.productInfoTitle && css`
cursor: auto;
`
}
`;

export default Title;