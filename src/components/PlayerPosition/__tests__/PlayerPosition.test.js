import React from 'react';
import { shallow } from 'enzyme';

import PlayerPosition from '../PlayerPosition';

// need to have relative path in order for Jest to pull the mocked service
import AdminService from '../../../services/AdminService';

// let jest know to pull mock data from __mocks__
jest.mock('../../../services/AdminService');

describe('PlayerPosition', () => {
    let wrapper;
    let instance;

    const props = {
        classes: {},
        namespace: 'TEST',
    };

    beforeEach(() => {
        AdminService.getLocations = jest.fn(() => Promise.resolve({ data: [] }));

        wrapper = shallow(<PlayerPosition { ...props } />);
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
        const result = instance.shouldComponentUpdate(props, wrapper.state());
        expect(result).toBe(false);
    });

    it('Test shouldComponentUpdate to be true', () => {
        const result = instance.shouldComponentUpdate({}, {});
        expect(result).toBe(true);
    });
});
