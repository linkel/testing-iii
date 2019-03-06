import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Display from './Display.js';

const mock = jest.fn()

describe('<Display />', () => {
    it('should show Locked when locked', () => {
        const { getByText } = render(<Display locked={true} closed={true}/>);
        const status = getByText(/locked/i);
        expect(status).toBeTruthy();
    });
    it('showed show Unlocked when unlocked', () => {
        const { getByText } = render(<Display locked={false} closed={true}/>);
        const status = getByText(/unlocked/i);
        expect(status).toBeTruthy();
      });
    it('should show Open when open', () => {
        const { getByText } = render(<Display locked={false} closed={false}/>);
        const status = getByText(/open/i);
        expect(status).toBeTruthy();
    });
    it('should show Closed when closed', () => {
        const { getByText } = render(<Display locked={false} closed={true}/>);
        const status = getByText(/closed/i);
        expect(status).toBeTruthy();
    });
  });
  