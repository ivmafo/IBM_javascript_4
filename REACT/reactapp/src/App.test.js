import { render, screen } from '@testing-library/react';
import App from './App';
export default dataForm

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


form_post('configuracion de form', () => {
  render(<FormCsr1/>); 
  const dataForm = screen.dataForm('/dist/configuracion/form');
  expect(dataForm).toEqual(form_post('configuracion de form', () => {
    // Test de la data obtenida
    satisfies(form_post('configuration de form', () => {
      // Test de la data obtenida
      expect(dataForm).toEqual({
        // Esperado
      })
    })
  })
}
])