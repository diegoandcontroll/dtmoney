import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createServer, Model} from 'miragejs';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
createServer({
  models: {
    transaction: Model
  },
  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance app react',
          type: 'deposit',
          category: 'Dev',
          amount: 1200,
          createdAt: new Date('2022-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Formatação de pc',
          type: 'deposit',
          category: 'Suporte técnico',
          amount: 250,
          createdAt: new Date('2022-07-12 12:30:00')
        },
        {
          id: 3,
          title: 'Ifood',
          type: 'withdraw',
          category: 'Comida',
          amount: 100,
          createdAt: new Date('2022-03-12 22:50:00')
        }
      ]
    })
  },
  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
