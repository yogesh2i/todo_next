import mongoose from "mongoose";
import {NextResponse} from "next/server"
import {Data} from "../../../../../../lib/models/user";
import {connectionString} from "../../../../../../lib/db";

export async function GET(){
   await mongoose.connect(connectionString);
   const data = await Data.find();
   let results = data.map((item)=>item.contact);
    return NextResponse.json({results},{status:200});
}

