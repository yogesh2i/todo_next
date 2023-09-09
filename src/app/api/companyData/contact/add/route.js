import mongoose from "mongoose";
import {NextResponse} from "next/server"
import {Data} from "../../../../../../lib/models/user";
import {connectionString} from "../../../../../../lib/db";


export async function POST(req){
   const payload = await req.json();
   await mongoose.connect(connectionString);
   let user = new Data(payload);
   const result = await user.save();
   return NextResponse.json({result},{status:200});
}