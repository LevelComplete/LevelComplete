import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Image } from 'react-native';

import TitlePage from '../src/components/TitlePage';

describe('Given a Title page', () => {
    let component;

    describe('when rendered', () => {
        before(() => component = shallow(<TitlePage />));

        it('should show an image of a game controller', () => {
            console.log(component.debug());
            expect(component.find(Image)).to.have.length(1);
        });
    });
});