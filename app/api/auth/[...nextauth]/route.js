import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret:process.env. GOOGLE_CLIENT_SECRET
        })
    ],
    async session({session}){
        if(session){
            console.log('you are in')
        }else{
            console.log('you are not')
        }
    },
    async signIn({profile}){

    }
    
})
export {handler as GET , handler as POST}