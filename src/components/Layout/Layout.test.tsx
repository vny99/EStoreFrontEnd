import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from './Layout';

jest.mock('../Navbar/Navbar', () => () => <div>Mocked Navbar</div>);

describe('Layout', () => {
    it('should render Navbar, children', () => {
        const { getByText } = render(
            <Layout>
                <div>Test Children</div>
            </Layout>
        );

        expect(getByText('Mocked Navbar')).toBeInTheDocument();
        expect(getByText('Test Children')).toBeInTheDocument();
    });
});