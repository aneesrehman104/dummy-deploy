/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: "/dashboard",
            destination: "/overview"
          }
        ]
      }
}

console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
console.log('Member Stack:', process.env.NEXT_PUBLIC_MEMBERSTACK_KEY);

module.exports = nextConfig
