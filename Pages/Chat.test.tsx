import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Chat from './Chat.tsx';

describe('Chat Component', () => {
  it('displays a connecting message on initial render', () => {
    render(<Chat />);
    expect(screen.getByText('Connecting to the neural pathway...')).toBeInTheDocument();
  });
});
