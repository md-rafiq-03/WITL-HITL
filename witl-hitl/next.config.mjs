/** @type {import('next').NextConfig} */

// // next.config.js
// module.exports = {
//     reactStrictMode: false,
//     // Other configurations
//   };
  
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:'*.googleusercontent.com'
            },
            {
                hostname:'res.cloudinary.com'
            }
        ],
    }
};


export default nextConfig;
