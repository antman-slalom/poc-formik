import React from 'react';
import { shallow } from 'enzyme';

import PlayerIdentification from '../PlayerIdentification';

describe('PlayerIdentification', () => {
    let wrapper;
    let instance;

    const props = {
        classes: {},
        namespace: 'TEST',
    };

    beforeEach(() => {
        wrapper = shallow(<PlayerIdentification { ...props } />);
        instance = wrapper.instance();
    });

    afterEach(() => {
        // clears all mocks to prevent mock bleeding from test to test,
        jest.clearAllMocks();

        // mock the API service after the clear
        jest.mock('../../../services/AdminService');
    });

    // =================================
    // Render and Snapshot
    // =================================

    it('matches snapshot', () => {
        expect(wrapper.instance()).toMatchSnapshot();
    });

    it('should render', () => {
        expect(wrapper.instance()).not.toBeNull();
    });

    // =================================
    // Components call correct functions
    // =================================

    // N/A

    // =================================
    // Functions act as expected
    // =================================
    it('Test shouldComponentUpdate to be false', () => {
        const result = instance.shouldComponentUpdate(props);
        expect(result).toBe(false);
    });

    it('Test shouldComponentUpdate to be true', () => {
        const result = instance.shouldComponentUpdate({});
        expect(result).toBe(true);
    });
});
