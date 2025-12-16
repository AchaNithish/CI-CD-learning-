import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    iterations: 5  // Run 5 times
};

export default function() {
    console.log('Making request...');
    http.get('https://test.k6.io');
    sleep(1);
}