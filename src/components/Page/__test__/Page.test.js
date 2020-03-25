import React from 'react';

import { shallow } from 'enzyme';
import { unwrap } from '@material-ui/core/test-utils';

import Page from '../index';

describe('Page', () => {
    let Unwrapped;
    let wrapper;

    const props = {
        classes: {},
        title: 'title',
        subTitle: 'user'
    };

    beforeEach(() => {
        Unwrapped = unwrap(Page);
        wrapper = shallow(<Unwrapped { ...props } />);
    });

    it('matches snapshot', () => {
        expect(wrapper.instance()).toMatchSnapshot();
    });

    it('should render', () => {
        expect(wrapper.instance()).not.toBeNull();
    });

    // TODO - fix tests
    it('should render with children', () => {
        // const children = ['<div>Child 1</div>', '<div>Child 2</div>'];
        // const shallowWrapper = shallow(<Unwrapped { ...props } >{ children }</Unwrapped>);

        // expect(shallowWrapper.find(Paper).children()).toHaveLength(2);
    });
});
