import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer xjKXNk0iRSnzbeHqP4mVz3HHs9HOxSmCO1tpsXq4rCKCCiqsHX57zKWY8IJmvUswYaOuPugnyTZ6oVw8Ohhs9ymCNARBYzwYGWeMlDaGQPTlbuLYCh2q1_xFiT06YHYx'
    }
});