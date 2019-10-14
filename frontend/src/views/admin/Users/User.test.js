import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import { mount } from 'enzyme'
import User from './User';


it('renders without crashing', () => {
  const wrapper = mount(
    <MemoryRouter>
      <User match={{params: {id: "1"}, isExact: true, path: "/usuario/:id", name: "Detalhes do usuário"}}/>
    </MemoryRouter>
  );
  expect(wrapper.containsMatchingElement(<strong>Marcos Fernandes</strong>)).toEqual(true)
  wrapper.unmount()
});
