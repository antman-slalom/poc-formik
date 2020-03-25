import React from 'react';
import { shallow } from 'enzyme';
import { Field } from 'formik';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import FormControl from '@material-ui/core/FormControl';
import Checkbox from '../Checkbox';

describe('Checkbox', () => {
    let wrapper;
    let instance;

    const props = {
        name: 'checkbox-test'
    };

    beforeEach(() => {
        wrapper = shallow(<Checkbox { ...props } />);
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

    // TODO - prove this part works in test... Will help!!
    it('should call DTM onClick function', () => {
        const onBlur = jest.fn();

        const wrapperOnBlur = shallow(<Checkbox onBlue={ onBlur } { ...props } />).dive();

        expect(onBlur).toHaveBeenCalledTimes(0);
        wrapperOnBlur.find('#checkbox-test').simulate('blur', null);
        expect(onBlur).toHaveBeenCalledTimes(1);
    });

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
