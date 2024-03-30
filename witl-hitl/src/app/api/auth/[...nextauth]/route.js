import NextAuth from "next-auth"
import clientPromise from '@/libs/mongoClient'
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"

const handler = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
      ]
})

export { handler as GET, handler as POST }