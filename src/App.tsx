import StripeCheckout, { Token } from 'react-stripe-checkout'
import axios from 'axios';

import './App.css'

const publishableKey = 'pk_test_f6vFLmYu16ZPh52DOtiuYl8x'

const product = {
  name:'Ensalada',
  price: 50
}

const jobs = {
  "business_id": "25",
  "contract_type": "Renovable",
  "contract_time": 2,
  "description": "asdasd",
  "end_date": "2020-12-12",
  "name": "Especialista Middleware Linux N3",
  "summary": "BALIDEA, empresa española del sector de las Tecnologías de la Información y la Comunicación (TIC) que desde 2002 ofrece servicios de consultoría, desarrollo e integración de software y externalización tecnológica, inicia operaciones en Perú y para ello está requiriendo cubrir varias posiciones tech en su fábrica digital.",
  "salary": 2,
  "skills": "",
  "work_modality_id": "1",
  "country_id": "1",
  "lang":"123123",
  "stripe_id":"ch_yexdasxzxzxaxaf"
}

function App() {

  const payNow = async (token: Token) => {
    try {
      const response = await axios({
        url: 'http://localhost:3000/api/stripe/payment',
        method: 'post',
        data: {
          amount: product.price * 100,
          token,
        },
      });
      if (response.status === 200) {
        // const resp = await axios(jobs);
      }
    } catch (error) {
      console.log('error: ', error)
    }
  };
  
  return (
    <div className="App">
      <StripeCheckout
        stripeKey={publishableKey}
        name={jobs.name}
        description={jobs.summary}
        image="https://cdn.whiz.pe/api/v2/image/35368dfa-e0b6-4f19-b029-23b41ed69c32/png"
        amount={product.price * 100}
        token={payNow}
        email='test3@mailinator.com'
        locale='en' // en o es
        // billingAddress
        // shippingAddress
      />
    </div>
  )
}

export default App
