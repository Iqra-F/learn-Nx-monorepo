// jest.setup.ts
import '@testing-library/jest-dom'; // for RTL matchers like toBeInTheDocument
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks(); // allows mocking fetch requests globally
